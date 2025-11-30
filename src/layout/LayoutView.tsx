import { memo, type FC, type ReactNode } from "react";
import { Footer } from "layout/parts/Footer";
import { Header } from "layout/parts/Header";
import { Main } from "layout/parts/Main";

interface LayoutViewProps {
  /**
   * 子要素
   * @type {ReactNode}
   */
  children: ReactNode;

  /**
   * フッターの文言
   * @type {string}
   */
  footerText: string;
}

export const LayoutView: FC<LayoutViewProps> = memo(({ children, footerText }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer footerText={footerText} />
  </>
));
