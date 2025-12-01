import { memo, type FC } from "react";
import { LoadingContext, useLoadingContext } from "contexts/context/LoadingContext";
import type { BaseContext } from "types/contexts/BaseContext";
import type { LoadingContextDispatch, LoadingContextValue } from "types/contexts/context/LoadingContext";
import type { BaseComponentProps } from "types/styles/BaseComponentProps";

interface ContextsProviderProps extends BaseComponentProps {}

export const ContextsProvider: FC<ContextsProviderProps> = memo(({ children }) => {
  const loadingContext: BaseContext<LoadingContextValue, LoadingContextDispatch> = useLoadingContext();

  return <LoadingContext value={loadingContext}>{children}</LoadingContext>;
});
