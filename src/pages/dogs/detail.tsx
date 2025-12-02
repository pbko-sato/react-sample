import { type FC, memo, useCallback, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { DogApi } from "constants/DogApi";
import { Button } from "components/atom/button/Button";
import { FlexBox } from "components/atom/div/FlexBox";
import { Select } from "components/atom/input/Select";
import { useFetch } from "hooks/models/UseFetch";
import type { ALL_BREEDS_RESPONSE } from "types/apis/dog-api/AllBreedList";

/**
 * わんこの詳細ページのコンテナ
 * @type {FC}
 */
export const DogsDetail: FC = memo(() => {
  const navigate = useNavigate();

  // 犬種の一覧を取得
  const { data: breedData, isFetching } = useFetch<ALL_BREEDS_RESPONSE>({ url: DogApi.ALL_BREEDS });

  // 犬種の配列の状態
  const [breeds, setBreeds] = useState<string[]>([]);
  // サブ犬種の配列の状態
  const [subBreeds, setSubBreeds] = useState<string[]>([]);

  // 現在選択されている犬種
  const [currentBreed, setCurrentBreed] = useState<string>("");
  // 現在選択されているサブ犬種
  const [currentSubBreed, setCurrentSubBreed] = useState<string>("");

  // 犬種のプルダウン変化時の処理
  const handleChangeBreed = useCallback(
    (value: string) => {
      setCurrentBreed(value);

      const targetBreed = breedData?.message?.[value];
      if (targetBreed?.length) {
        setSubBreeds(targetBreed);
        setCurrentSubBreed(targetBreed[0]);
      } else {
        setSubBreeds([]);
        setCurrentSubBreed("");
      }
    },
    [breedData]
  );

  // サブ犬種のプルダウン変化時の処理
  const handleChangeSubBreed = useCallback((value: string) => setCurrentSubBreed(value), []);

  // 「検索」ボタン押下時の処理
  const handleClickSearch = useCallback(() => {
    const targetBreed: string = `${currentBreed}${currentSubBreed && `-${currentSubBreed}`}`;
    navigate(`/dogs/detail/${targetBreed}`);
  }, [currentBreed, currentSubBreed, navigate]);

  useEffect(() => {
    if (breedData && !breeds.length) {
      const breedList: string[] = Object.keys(breedData.message);

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setBreeds(breedList);
      setCurrentBreed(breedList[0]);
    }
  }, [breeds.length, breedData]);

  return (
    <FlexBox className='w-full'>
      <FlexBox horizontal className='w-full'>
        <FlexBox>
          <Select
            value={currentBreed}
            disabled={isFetching}
            options={breeds.map((breed) => ({ label: breed, value: breed }))}
            onChange={handleChangeBreed}
          />
        </FlexBox>
        {subBreeds.length ? (
          <FlexBox>
            <Select
              value={currentSubBreed}
              disabled={isFetching}
              options={subBreeds.map((breed) => ({ label: breed, value: breed }))}
              onChange={handleChangeSubBreed}
            />
          </FlexBox>
        ) : null}
        <FlexBox className='min-w-[70px]'>
          <Button disabled={!currentBreed} onClick={handleClickSearch}>
            検索
          </Button>
        </FlexBox>
      </FlexBox>
      <FlexBox className='w-full'>
        <Outlet />
      </FlexBox>
    </FlexBox>
  );
});
