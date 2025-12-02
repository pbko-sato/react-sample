import { memo, useCallback, useEffect, useMemo, useState, type FC } from "react";
import { useParams } from "react-router";
import { DogApi } from "constants/DogApi";
import { PER_PAGE_COUNT } from "constants/PerPageCount";
import { Pets } from "@mui/icons-material";
import { Card } from "components/atom/div/Card";
import { FlexBox } from "components/atom/div/FlexBox";
import { Pagination } from "components/Pagination";
import { useFetch } from "hooks/models/UseFetch";
import type { RANDOM_DOG_LIST_RESPONSE } from "types/apis/dog-api/RandomDogList";

export const DogsDetailBreed: FC = memo(() => {
  const { breed } = useParams();

  const { currentBreed, currentSubBreed } = useMemo(() => {
    if (!breed) {
      return { currentBreed: "", currentSubBreed: "" };
    }

    const pathParameters = breed.split("-");
    if (pathParameters.length === 2) {
      return { currentBreed: pathParameters[0], currentSubBreed: pathParameters[1] };
    }
    return { currentBreed: pathParameters[0], currentSubBreed: "" };
  }, [breed]);

  // ページ番号
  const [index, setIndex] = useState<string>("1");

  // 犬種で指定したわんこの画像を取得
  const {
    data: dogListDataByBreed,
    isFetching: isFetchingByBreed,
    fetchData: fetchDataByBreed
  } = useFetch<RANDOM_DOG_LIST_RESPONSE>({
    url: DogApi.RANDOM_LIST_10000_BY_BREED.replace(":breed", currentBreed),
    disabledOnMount: true
  });
  // サブ犬種で指定したわんこの画像を取得
  const {
    data: dogListDataBySubBreed,
    isFetching: isFetchingBySubBreed,
    fetchData: fetchDataBySubBreed
  } = useFetch<RANDOM_DOG_LIST_RESPONSE>({
    url: DogApi.RANDOM_LIST_10000_BY_SUB_BREED.replace(":breed", currentBreed).replace(":sub-breed", currentSubBreed),
    disabledOnMount: true
  });

  // フェッチ中か
  const isFetching: boolean = isFetchingByBreed || isFetchingBySubBreed;

  // メイン犬種のリストを表示・フェッチすべきか
  const isByBreed: boolean = !!currentBreed && !currentSubBreed;
  // サブ犬種のリストを表示・フェッチすべきか
  const isBySubBreed: boolean = !!currentBreed && !!currentSubBreed;

  // ページ変化時の処理
  const handleChangePagination = useCallback((newIndex: string) => setIndex(newIndex), []);

  // わんこのカード押下時の処理
  const handleClickDogCard = useCallback((link: string) => window.open(link), []);

  const { dogList, displayedDogList } = useMemo(() => {
    const dogList = isBySubBreed
      ? dogListDataBySubBreed?.message.length
        ? dogListDataBySubBreed?.message
        : []
      : isByBreed
        ? dogListDataByBreed?.message.length
          ? dogListDataByBreed?.message
          : []
        : [];

    return {
      dogList,
      displayedDogList: dogList.slice((Number(index) - 1) * PER_PAGE_COUNT, Number(index) * PER_PAGE_COUNT)
    };
  }, [dogListDataByBreed?.message, dogListDataBySubBreed?.message, index, isByBreed, isBySubBreed]);

  useEffect(() => {
    if (isByBreed) {
      fetchDataByBreed();
    } else if (isBySubBreed) {
      fetchDataBySubBreed();
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIndex("1");
  }, [isByBreed, isBySubBreed, fetchDataByBreed, fetchDataBySubBreed]);

  return (
    <FlexBox className='w-full h-full'>
      {/* ページング部品(わんこの一覧データがある場合のみ表示) */}
      {displayedDogList.length && (
        <FlexBox className='w-full py-[10px]'>
          <Pagination
            currentIndex={index ?? "1"}
            targetLength={dogList.length}
            perPageCount={PER_PAGE_COUNT}
            onChange={handleChangePagination}
          />
        </FlexBox>
      )}
      <FlexBox className='w-full object-contain'>
        {/* わんこの一覧を表示 */}
        {/* フェッチ中はダミーを表示。フェッチ後はわんこの一覧を表示 */}
        {isFetching
          ? Array(PER_PAGE_COUNT)
              .fill("")
              .map((_, i) => i)
              .map((index) => (
                <FlexBox key={index} className='w-full h-[150px]'>
                  <div className='skelton'>
                    <Pets />
                  </div>
                </FlexBox>
              ))
          : displayedDogList.map((link) => (
              <>
                {/* 押下すると、別タブでわんこの画像を表示 */}
                <Card key={link} className='cursor-pointer' onClick={() => handleClickDogCard(link)}>
                  <div className='avatar'>
                    <img src={link} className='rounded-xl' />
                  </div>
                </Card>
              </>
            ))}
      </FlexBox>
      {/* ページング部品(わんこの一覧データがある場合のみ表示) */}
      {dogList.length && (
        <FlexBox className='w-full py-[10px]'>
          <Pagination
            currentIndex={index ?? "1"}
            targetLength={dogList.length}
            perPageCount={PER_PAGE_COUNT}
            onChange={handleChangePagination}
          />
        </FlexBox>
      )}
    </FlexBox>
  );
});
