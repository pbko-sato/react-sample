import { useEffect, useRef } from "react";

export const useOnceOnMount = (callback: () => void): void => {
  const hasCalledRef = useRef<boolean>(false);

  useEffect(() => {
    if (!hasCalledRef.current) {
      callback();
      hasCalledRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
