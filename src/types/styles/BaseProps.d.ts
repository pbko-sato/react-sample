import type { ReactNode } from "react";

export interface BaseProps {
  /**
   * 子要素
   * @type {ReactNode}
   */
  children?: ReactNode;

  /**
   * 追加のクラス名
   * @type {string}
   */
  className?: string;
}
