import { memo, type FC } from "react";
import { FlexBox } from "components/atom/div/FlexBox";
import { ZIndex } from "styles/constants/ZIndex";

export const Footer: FC = memo(() => (
  <footer className={`footer w-full h-[30px] bottom-0 left-0 sticky z-${ZIndex.LAYOUT} opacity-100`}>
    <FlexBox className='w-full p-[5px]'>
      <span>サンプルアプリ</span>
    </FlexBox>
  </footer>
));
