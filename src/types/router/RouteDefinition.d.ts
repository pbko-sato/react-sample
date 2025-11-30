import type { ReactNode } from "react";

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
