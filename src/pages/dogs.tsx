import { memo, type FC } from "react";
import { Outlet } from "react-router";
import { FlexBox } from "components/atom/div/FlexBox";

export const Dogs: FC = memo(() => {
  return (
    <FlexBox className='w-full'>
      <FlexBox className='w-full'>
        <p>わんこのページにようこそ!</p>
      </FlexBox>
      <FlexBox className='w-full'>
        <Outlet />
      </FlexBox>
    </FlexBox>
  );
});
