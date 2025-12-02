import { memo, type ChangeEvent, type FC } from "react";
import type { PulldownTarget } from "types/components/PulldownTarget";
import type { BaseComponentProps } from "types/styles/BaseComponentProps";

interface SelectProps extends BaseComponentProps {
  /**
   * 選択されている値
   * @type {string}
   */
  value: string;

  /**
   * 選択肢の配列
   * @type {PulldownTarget[]}
   */
  options: PulldownTarget[];

  /**
   * 非活性か
   * @type {boolean}
   */
  disabled?: boolean;

  /**
   * 変化時の処理
   * @param {string} value
   * @returns {void}
   */
  onChange: (value: string) => void;
}

export const Select: FC<SelectProps> = memo(({ options, disabled, className, onChange }) => (
  <select
    disabled={disabled}
    className={`min-w-[200px] select ${className ? ` ${className}` : ""}`}
    onChange={(e: ChangeEvent<HTMLSelectElement>) => onChange(e.currentTarget.value)}
  >
    {options.map(({ label, value }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
));
