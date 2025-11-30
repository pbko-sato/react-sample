import { memo, type FC, type Ref } from "react";
import { MoreVert } from "@mui/icons-material";
import { Button } from "components/atom/button/Button";
import { FlexBox } from "components/atom/div/FlexBox";
import { ZIndex } from "styles/constants/ZIndex";
import type { RouteObject } from "types/router/RouteDefinition";

interface HeaderProps {
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
   * 遷移先ボタン押下時の処理
   * @param {string} path
   * @returns {void}
   */
  onClickDropdown: (path: string) => void;
}

export const Header: FC<HeaderProps> = memo(({ dropdownTarget, dropdownRef, onClickDropdown }) => (
  <header
    className={`navbar w-full h-[70px] top-0 left-0 py-0 sticky ${ZIndex.LAYOUT} bg-green-50 opacity-95 shadow-md`}
  >
    <FlexBox horizontal justify='justify-between' className='w-full p-[5px]'>
      <div>
        <h1 className='text-5xl'>サンプルアプリ</h1>
      </div>
      <div>
        <nav>
          <details className='dropdown dropdown-end'>
            <summary className='btn' ref={dropdownRef}>
              <MoreVert />
            </summary>
            <ul className='menu dropdown-content min-w-[100px] p-0 bg-white shadow-md'>
              {dropdownTarget.map(({ path, title }) => (
                <li key={path}>
                  <Button onClick={() => onClickDropdown(path)}>{title}</Button>
                </li>
              ))}
            </ul>
          </details>
        </nav>
      </div>
    </FlexBox>
  </header>
));
