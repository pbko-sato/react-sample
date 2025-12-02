import { memo, useCallback, useMemo, type FC } from "react";
import { useNavigate, useParams } from "react-router";
import { DogApi } from "constants/DogApi";
import { PER_PAGE_COUNT } from "constants/PerPageCount";
import { Pets } from "@mui/icons-material";
import { Card } from "components/atom/div/Card";
import { FlexBox } from "components/atom/div/FlexBox";
import { Pagination } from "components/Pagination";
import { useFetch } from "hooks/models/UseFetch";
import type { RANDOM_DOG_LIST_RESPONSE } from "types/apis/dog-api/RandomDogList";

/**
 * 「/dogs/list/:index」で表示される、わんこの一覧を表示するページ
 * @type {FC}
 */
export const DogsListIndex: FC = memo(() => {
  // 画面遷移用の関数
  const navigate = useNavigate();
  // パスパラメータの「index」 例)/dogs/list/1の「1」
  const { index } = useParams();
  const indexNumber: number = Number(index);

  // わんこの一覧データを取得
  const { data, isFetching } = useFetch<RANDOM_DOG_LIST_RESPONSE>({ url: DogApi.RANDOM_LIST_50 });

  // ページ変化時の処理
  const handleChangePagination = useCallback((newIndex: string) => navigate(`/dogs/list/${newIndex}`), [navigate]);

  // わんこのカード押下時の処理
  const handleClickDogCard = useCallback((link: string) => window.open(link), []);

  // 表示されているわんこの一覧
  // わんこの一覧データの配列から、パスパラメータの「index」をもとに切り出し
  const displayedDogsList = useMemo(
    () => (data ? data.message.slice((indexNumber - 1) * PER_PAGE_COUNT, indexNumber * PER_PAGE_COUNT) : []),
    [indexNumber, data]
  );

  return (
    <FlexBox className='w-full h-full'>
      {/* ページング部品(わんこの一覧データがある場合のみ表示) */}
      {data?.message.length && (
        <FlexBox className='w-full py-[10px]'>
          <Pagination
            currentIndex={index ?? "1"}
            targetLength={data.message.length}
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
          : displayedDogsList.map((link) => (
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
      {data?.message.length && (
        <FlexBox className='w-full py-[10px]'>
          <Pagination
            currentIndex={index ?? "1"}
            targetLength={data.message.length}
            perPageCount={PER_PAGE_COUNT}
            onChange={handleChangePagination}
          />
        </FlexBox>
      )}
    </FlexBox>
  );
});
