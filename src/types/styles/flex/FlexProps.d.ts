import type { AlignItemsClass } from "types/styles/flex/AlignItemsClass";
import type { JustifyContentClass } from "types/styles/flex/JustifyContentClass";

export interface FlexProps {
  /**
   * `flex-direction`で`row`を選択するか
   * @type {boolean}
   */
  horizontal?: boolean;

  /**
   * `justify-content`に設定する値
   * @type {JustifyContentClass}
   */
  justify?: JustifyContentClass;

  /**
   * `align-items`に設定する値
   * @type {AlignItemsClass}
   */
  align?: AlignItemsClass;
}
