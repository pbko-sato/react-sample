import { memo, type FC } from "react";
import type { BaseComponentProps } from "types/styles/BaseComponentProps";

interface ButtonProps extends BaseComponentProps {}

export const Button: FC<ButtonProps> = memo(({ children, className, onClick }) => (
  <button className={`btn rounded-sm ${className && ` ${className}`}`} onClick={onClick}>
    {children}
  </button>
));
