import { memo, type FC, type ReactNode, type Ref } from "react";
import { Footer } from "layout/parts/Footer";
import { Header } from "layout/parts/Header";
import { Main } from "layout/parts/Main";
import type { RouteObject } from "types/router/RouteDefinition";

interface LayoutViewProps {
  /**
   * 子要素
   * @type {ReactNode}
   */
  children: ReactNode;

  /**
   * 遷移先情報
   * @type {RouteObject[]}
   */
  dropdownTarget: RouteObject[];

  /**
   * 遷移先を表示させるための要素のref
   * @type {Ref<HTMLElement>}
   */
  dropdownRef: Ref<HTMLElement>;

  /**
   * フッターの文言
   * @type {string}
   */
  footerText: string;

  /**
   * 遷移先ボタン押下時の処理
   * @param {string} path
   * @returns {void}
   */
  onClickDropdown: (path: string) => void;
}

export const LayoutView: FC<LayoutViewProps> = memo(
  ({ children, dropdownTarget, dropdownRef, footerText, onClickDropdown }) => (
    <>
      <Header dropdownTarget={dropdownTarget} dropdownRef={dropdownRef} onClickDropdown={onClickDropdown} />
      <Main>{children}</Main>
      <Footer footerText={footerText} />
    </>
  )
);
