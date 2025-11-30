import { memo, type FC } from "react";
import type { BaseProps } from "types/styles/BaseProps";
import type { FlexProps } from "types/styles/flex/FlexProps";

interface FlexBoxProps extends BaseProps, FlexProps {}

export const FlexBox: FC<FlexBoxProps> = memo(
  ({ children, horizontal = false, justify = "justify-center-safe", align = "items-center-safe", className }) => (
    <div className={`flex ${horizontal ? "flex-row" : "flex-col"} ${justify} ${align}${className && ` ${className}`}`}>
      {children}
    </div>
  )
);
