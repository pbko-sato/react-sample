import { useContext, type Context } from "react";
import type { BaseContext } from "types/contexts/BaseContext";

export const useContextValue = <V, D>(context: Context<BaseContext<V, D>>): V =>
  useContext<BaseContext<V, D>>(context).contextValue;
