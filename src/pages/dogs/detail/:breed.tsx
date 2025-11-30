import { memo, type FC } from "react";
import { useParams } from "react-router";
import { FlexBox } from "components/atom/div/FlexBox";

export const DogsDetailBreed: FC = memo(() => {
  const { breed } = useParams();

  return <FlexBox className='w-full'>{breed}</FlexBox>;
});
