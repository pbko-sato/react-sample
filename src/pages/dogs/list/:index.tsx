import { memo, type FC } from "react";
import { useParams } from "react-router";
import { FlexBox } from "components/atom/div/FlexBox";

export const DogsListIndex: FC = memo(() => {
  const { index } = useParams();

  return <FlexBox className='w-full'>{index}</FlexBox>;
});
