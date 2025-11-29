import { memo, type FC, type ReactNode } from "react";

interface MainProps {
  /**
   * 子要素
   * @type {ReactNode}
   */
  children: ReactNode;
}

export const Main: FC<MainProps> = memo(({ children }) => (
  <main style={{ minHeight: "calc(100svh - 132px)", overflow: "auto" }}>
    <div style={{ padding: "5px" }}>{children}</div>
  </main>
));
