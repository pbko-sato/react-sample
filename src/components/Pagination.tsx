import { memo, useMemo, type FC } from "react";
import { Button } from "components/atom/button/Button";
import { FlexBox } from "components/atom/div/FlexBox";

interface PaginationProps {
  /**
   * 現在の`:index`
   * @type {string}
   */
  currentIndex: string;

  /**
   * ページング対象の総数
   * @type {number}
   */
  targetLength: number;

  /**
   * 1ページあたりに表示する件数
   * @type {number}
   */
  perPageCount: number;

  /**
   * ページボタンクリック時の処理
   * @param {string} newIndex
   * @returns {void}
   */
  onChange: (newIndex: string) => void;
}

export const Pagination: FC<PaginationProps> = memo(({ currentIndex, targetLength, perPageCount, onChange }) => {
  const buttonsCount = useMemo(() => Math.ceil(targetLength / perPageCount), [perPageCount, targetLength]);

  const handleChange = (newIndex: string) => {
    if (newIndex !== currentIndex) {
      onChange(newIndex);
    }
  };

  return (
    <FlexBox horizontal className='join max-w-svw px-[5px] overflow-auto'>
      {Array(buttonsCount)
        .fill("")
        .map((_, i) => i + 1)
        .map((newIndex) => (
          <Button
            key={newIndex}
            className={`${String(newIndex) === currentIndex ? "btn-neutral" : undefined}`}
            onClick={() => handleChange(String(newIndex))}
          >
            {newIndex}
          </Button>
        ))}
    </FlexBox>
  );
});
