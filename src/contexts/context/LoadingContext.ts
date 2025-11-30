import { createContext, useCallback, useState, type Context } from "react";
import type { BaseContext } from "types/contexts/BaseContext";
import type { LoadingContextDispatch, LoadingContextValue } from "types/contexts/context/LoadingContext";

export const useLoadingContext = (): BaseContext<LoadingContextValue, LoadingContextDispatch> => {
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * ローディング状態を更新する
   * @param {boolean} loading
   * @returns {void}
   */
  const updateLoading = useCallback((loading: boolean): void => setLoading(loading), []);

  return { contextValue: { loading }, dispatch: { updateLoading } };
};

export const LoadingContext: Context<BaseContext<LoadingContextValue, LoadingContextDispatch>> = createContext<
  BaseContext<LoadingContextValue, LoadingContextDispatch>
>({ contextValue: { loading: false }, dispatch: { updateLoading: () => {} } });
