import { memo, type FC } from "react";
import type { BaseComponentProps } from "types/styles/BaseComponentProps";

interface CardProps extends BaseComponentProps {}

export const Card: FC<CardProps> = memo(({ children, className, onClick }) => (
  <div className={`card bg-base-100 w-full m-[5px] shadow-md${className ? ` ${className}` : ""}`} onClick={onClick}>
    {children}
  </div>
));
