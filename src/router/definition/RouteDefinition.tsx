import type { ReactNode } from "react";
import { Index } from "pages/index";

type RouteKey = "INDEX";

interface BaseRouteObject {
  /**
   * 表示する要素
   * @type {ReactNode}
   */
  element: ReactNode;

  /**
   * パス
   * @type {string}
   */
  path: string;
}

export interface RouteObject extends BaseRouteObject {
  /**
   * ネストしたルーティング
   */
  childRoutes?: RouteObject[];
}

export const RouteDefinition: Record<RouteKey, RouteObject> = {
  INDEX: { element: <Index />, path: "/" }
} as const;
