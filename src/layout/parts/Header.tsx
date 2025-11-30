import { memo, type FC } from "react";
import { FlexBox } from "components/atom/div/FlexBox";
import { ZIndex } from "styles/constants/ZIndex";

export const Header: FC = memo(() => (
  <header
    className={`navbar w-full h-[70px] top-0 left-0 py-0 sticky z-${ZIndex.LAYOUT} bg-green-50 opacity-95 shadow-md`}
  >
    <FlexBox horizontal justify='justify-between' className='w-full p-[5px]'>
      <div>
        <h1 className='text-5xl'>サンプルアプリ</h1>
      </div>
      <div>
        <nav></nav>
      </div>
    </FlexBox>
  </header>
));
