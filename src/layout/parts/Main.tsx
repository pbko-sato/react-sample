import { memo, type FC, type ReactNode } from "react";

interface MainProps {
  /**
   * 子要素
   * @type {ReactNode}
   */
  children: ReactNode;
}

export const Main: FC<MainProps> = memo(({ children }) => (
  <main className='overflow-auto' style={{ minHeight: "calc(100svh - 100px)" }}>
    <div className='p-[5px]'>{children}</div>
  </main>
));
