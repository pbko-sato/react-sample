import { memo, useCallback, useContext, useMemo, useState, type FC } from "react";
import { useNavigate, useParams } from "react-router";
import { DogApi } from "constants/DogApi";
import { Pets } from "@mui/icons-material";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { Button } from "components/atom/button/Button";
import { FlexBox } from "components/atom/div/FlexBox";
import { LoadingContext } from "contexts/context/LoadingContext";
import { useOnceOnMount } from "hooks/UseOnceOnMount";
import type { RANDOM_DOG_LIST_RESPONSE } from "types/apis/dog-api/RandomDogList";
import type { BaseContext } from "types/contexts/BaseContext";
import type { LoadingContextDispatch, LoadingContextValue } from "types/contexts/context/LoadingContext";

const PER_PAGE_COUNT: number = 5;

export const DogsListIndex: FC = memo(() => {
  const navigate = useNavigate();
  const { index } = useParams();
  const indexNumber: number = Number(index);

  const {
    contextValue: { loading },
    dispatch: { updateLoading }
  } = useContext<BaseContext<LoadingContextValue, LoadingContextDispatch>>(LoadingContext);

  const [dogsList, setDogsList] = useState<string[]>([]);

  const handleChangePagination = useCallback((newIndex: string) => navigate(`/dogs/list/${newIndex}`), [navigate]);

  const getRandomDogs = () => {
    updateLoading(true);
    axios
      .get(DogApi.RANDOM_LIST_50)
      .then((res: AxiosResponse<RANDOM_DOG_LIST_RESPONSE>) => setDogsList(res.data.message))
      .catch((err: AxiosError<unknown, unknown>) => {
        setDogsList([]);
        console.log(err);
      })
      .finally(() => updateLoading(false));
  };

  const displayedDogsList = useMemo(
    () => dogsList.slice((indexNumber - 1) * PER_PAGE_COUNT, indexNumber * PER_PAGE_COUNT),
    [indexNumber, dogsList]
  );
  const buttonsCount = useMemo(() => Math.ceil(dogsList.length / PER_PAGE_COUNT), [dogsList]);

  useOnceOnMount(() => getRandomDogs());

  return (
    <FlexBox className='w-full h-full'>
      <FlexBox className='w-full py-[10px]'>
        <FlexBox horizontal className='join max-w-svw px-[5px] overflow-x-auto'>
          {Array(buttonsCount)
            .fill("")
            .map((_, i) => i + 1)
            .map((newIndex) => (
              <Button
                key={newIndex}
                className={`${newIndex === indexNumber ? "btn-neutral" : undefined}`}
                onClick={() => handleChangePagination(String(newIndex))}
              >
                {newIndex}
              </Button>
            ))}
        </FlexBox>
      </FlexBox>
      <FlexBox className='w-full object-contain'>
        {loading
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
      <FlexBox className='w-full py-[10px]'>
        <FlexBox horizontal className='join max-w-svw px-[5px] overflow-x-auto'>
          {Array(buttonsCount)
            .fill("")
            .map((_, i) => i + 1)
            .map((newIndex) => (
              <Button
                key={newIndex}
                className={`${newIndex === indexNumber ? "btn-neutral" : undefined}`}
                onClick={() => handleChangePagination(String(newIndex))}
              >
                {newIndex}
              </Button>
            ))}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
});
