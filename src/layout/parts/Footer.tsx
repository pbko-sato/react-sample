import { memo, type FC } from "react";
import { FlexBox } from "components/atom/div/FlexBox";
import { ZIndex } from "styles/constants/ZIndex";

interface FooterProps {
  /**
   * フッターの文言
   * @type {string}
   */
  footerText: string;
}

export const Footer: FC<FooterProps> = memo(({ footerText }) => (
  <footer className={`footer w-full h-[30px] bottom-0 left-0 sticky ${ZIndex.LAYOUT} bg-green-50 opacity-95 shadow-md`}>
    <FlexBox className='w-full p-[5px]'>
      <span>{footerText}</span>
    </FlexBox>
  </footer>
));
