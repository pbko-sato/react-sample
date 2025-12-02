import { memo, type FC } from "react";
import type { BaseComponentProps } from "types/styles/BaseComponentProps";

interface ButtonProps extends BaseComponentProps {
  /**
   * 非活性か
   * @type {boolean}
   */
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo(({ children, className, disabled, onClick }) => (
  <button className={`btn rounded-sm ${className ? ` ${className}` : ""}`} disabled={disabled} onClick={onClick}>
    {children}
  </button>
));
