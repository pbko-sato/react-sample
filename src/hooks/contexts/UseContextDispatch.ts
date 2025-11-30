import { useContext, type Context } from "react";
import type { BaseContext } from "types/contexts/BaseContext";

export const useContextDispatch = <V, D>(context: Context<BaseContext<V, D>>): D =>
  useContext<BaseContext<V, D>>(context).dispatch;
