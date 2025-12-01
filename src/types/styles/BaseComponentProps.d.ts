import type { ReactNode } from "react";

export interface BaseComponentProps {
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

  /**
   * onClick属性
   * @returns {void}
   */
  onClick?: () => void;
}
