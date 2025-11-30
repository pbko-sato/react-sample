import { memo, type FC } from "react";
import { LoadingDots } from "components/atom/button/LoadingDots";
import { FlexBox } from "components/atom/div/FlexBox";
import { LoadingContext } from "contexts/context/LoadingContext";
import { useContextValue } from "hooks/contexts/UseContextValue";
import { ZIndex } from "styles/constants/ZIndex";
import type { LoadingContextDispatch, LoadingContextValue } from "types/contexts/context/LoadingContext";

export const LoadingContainer: FC = memo(() => {
  const { loading } = useContextValue<LoadingContextValue, LoadingContextDispatch>(LoadingContext);

  return loading ? (
    <FlexBox className={`fixed w-svw h-svh top-0 ${ZIndex.LOADING} bg-white opacity-75`}>
      <LoadingDots />
    </FlexBox>
  ) : null;
});
