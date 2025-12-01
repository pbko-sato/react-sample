import { memo, type FC } from "react";
import type { BaseComponentProps } from "types/styles/BaseComponentProps";
import type { FlexProps } from "types/styles/flex/FlexProps";

interface FlexBoxProps extends BaseComponentProps, FlexProps {}

export const FlexBox: FC<FlexBoxProps> = memo(
  ({
    children,
    horizontal = false,
    justify = "justify-center-safe",
    align = "items-center-safe",
    className,
    onClick
  }) => (
    <div
      className={`flex ${horizontal ? "flex-row" : "flex-col"} ${justify} ${align}${className && ` ${className}`}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
);
