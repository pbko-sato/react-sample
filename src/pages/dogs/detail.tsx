import { type FC, memo } from "react";
import { Outlet } from "react-router";
import { FlexBox } from "components/atom/div/FlexBox";

export const DogsDetail: FC = memo(() => {
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
