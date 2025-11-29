import { memo, type FC, type ReactNode } from "react";
import { LayoutView } from "layout/LayoutView";

interface LayoutProps {
  /**
   * 子要素
   * @type {ReactNode}
   */
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = memo(({ children }) => <LayoutView>{children}</LayoutView>);
