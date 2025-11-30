import { memo, type FC } from "react";
import { Outlet } from "react-router";
import { FlexBox } from "components/atom/div/FlexBox";

export const DogsList: FC = memo(() => {
  return (
    <FlexBox className='w-full h-full'>
      <Outlet />
    </FlexBox>
  );
});
