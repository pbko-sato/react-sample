import { memo, type FC } from "react";
import type { BaseProps } from "types/styles/BaseProps";

interface ButtonProps extends BaseProps {
  /**
   * 押下時の処理
   * @returns {void}
   */
  onClick: () => void;
}

export const Button: FC<ButtonProps> = memo(({ children, className, onClick }) => (
  <button className={`btn rounded-sm ${className && ` ${className}`}`} onClick={onClick}>
    {children}
  </button>
));
