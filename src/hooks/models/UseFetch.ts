import { useContext, useState } from "react";
import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import { LoadingContext } from "contexts/context/LoadingContext";
import { useOnceOnMount } from "hooks/UseOnceOnMount";
import type { BaseContext } from "types/contexts/BaseContext";
import type { LoadingContextDispatch, LoadingContextValue } from "types/contexts/context/LoadingContext";

export const useFetch = <D, E = unknown>({ url, disabledOnMount }: { url: string; disabledOnMount?: boolean }) => {
  const {
    contextValue: { loading },
    dispatch: { updateLoading }
  } = useContext<BaseContext<LoadingContextValue, LoadingContextDispatch>>(LoadingContext);

  const [data, setData] = useState<D | null>(null);
  const [error, setError] = useState<AxiosError<E, unknown> | null>(null);

  const fetchData = () => {
    updateLoading(true);
    axios
      .get(url)
      .then((res: AxiosResponse<D>) => setData(res.data))
      .catch((err: AxiosError<E, unknown>) => setError(err))
      .finally(() => updateLoading(false));
  };

  useOnceOnMount(() => {
    if (!disabledOnMount) {
      fetchData();
    }
  });

  return { data, error, isFetching: loading, fetchData: fetchData };
};
