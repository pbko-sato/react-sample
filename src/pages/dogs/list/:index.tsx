import { memo, useCallback, useMemo, type FC } from "react";
import { useNavigate, useParams } from "react-router";
import { DogApi } from "constants/DogApi";
import { Pets } from "@mui/icons-material";
import { FlexBox } from "components/atom/div/FlexBox";
import { Pagination } from "components/Pagination";
import { useFetch } from "hooks/models/UseFetch";
import type { RANDOM_DOG_LIST_RESPONSE } from "types/apis/dog-api/RandomDogList";

const PER_PAGE_COUNT: number = 5;

export const DogsListIndex: FC = memo(() => {
  const navigate = useNavigate();
  const { index } = useParams();
  const indexNumber: number = Number(index);

  const { data, isFetching } = useFetch<RANDOM_DOG_LIST_RESPONSE>({ url: DogApi.RANDOM_LIST_50 });

  const handleChangePagination = useCallback((newIndex: string) => navigate(`/dogs/list/${newIndex}`), [navigate]);

  const displayedDogsList = useMemo(
    () => (data ? data.message.slice((indexNumber - 1) * PER_PAGE_COUNT, indexNumber * PER_PAGE_COUNT) : []),
    [indexNumber, data]
  );

  return (
    <FlexBox className='w-full h-full'>
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
              <div key={link} className='card bg-base-100 w-full m-[5px] shadow-md'>
                <div className='avatar'>
                  <img src={link} className='rounded-xl' />
                </div>
              </div>
            ))}
      </FlexBox>
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
