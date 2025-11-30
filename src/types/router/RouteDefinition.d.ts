import type { ReactNode } from "react";

interface BaseRouteObject {
  /**
   * 表示する要素
   * @type {ReactNode}
   */
  element: ReactNode;

  /**
   * タイトル
   * @type {string}
   */
  title: string;

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
