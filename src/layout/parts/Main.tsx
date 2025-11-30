import { memo, type FC, type ReactNode } from "react";
import { ZIndex } from "styles/constants/ZIndex";

interface MainProps {
  /**
   * 子要素
   * @type {ReactNode}
   */
  children: ReactNode;
}

export const Main: FC<MainProps> = memo(({ children }) => (
  <main className={`${ZIndex.BASE} overflow-auto bg-neutral-50`} style={{ minHeight: "calc(100svh - 100px)" }}>
    <div className='p-[5px]'>{children}</div>
  </main>
));
