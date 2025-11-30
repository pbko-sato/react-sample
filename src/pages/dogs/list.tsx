import { memo, type FC } from "react";
import { Outlet } from "react-router";
import { FlexBox } from "components/atom/div/FlexBox";

export const DogsList: FC = memo(() => {
  return (
    <FlexBox className='w-full'>
      <FlexBox className='w-full'>
        <></>
      </FlexBox>
      <FlexBox className='w-full'>
        <Outlet />
      </FlexBox>
    </FlexBox>
  );
});
