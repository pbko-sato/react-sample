import { memo, type FC } from "react";
import { LoadingContext, useLoadingContext } from "contexts/context/LoadingContext";
import type { BaseContext } from "types/contexts/BaseContext";
import type { LoadingContextDispatch, LoadingContextValue } from "types/contexts/context/LoadingContext";
import type { BaseProps } from "types/styles/BaseProps";

interface ContextsProviderProps extends BaseProps {}

export const ContextsProvider: FC<ContextsProviderProps> = memo(({ children }) => {
  const loadingContext: BaseContext<LoadingContextValue, LoadingContextDispatch> = useLoadingContext();

  return <LoadingContext value={loadingContext}>{children}</LoadingContext>;
});
