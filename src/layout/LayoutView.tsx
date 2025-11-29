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
}

export const LayoutView: FC<LayoutViewProps> = memo(({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
));
