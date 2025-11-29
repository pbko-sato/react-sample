import { memo, useImperativeHandle, useRef, useState, type ChangeEvent, type FC, type RefObject } from "react";
import fileInputImage from "assets/file-input.jpg";
import type { FileInputRef } from "types/components/FileInputRef";

interface FileInputProps {
  /**
   * ref
   * @type {RefObject<FileInputRef | null>}
   */
  ref: RefObject<FileInputRef | null>;

  /**
   * multiple属性
   * @type {boolean}
   */
  multiple?: boolean;

  /**
   * accept属性に設定したい内容の配列 \
   * `Array.join(",")`され設定される
   * @type {string[]}
   */
  accept?: string[];
}

export const FileInput: FC<FileInputProps> = memo(({ ref, multiple, accept }) => {
  const [files, setFiles] = useState<File[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClickImage = () => fileInputRef.current?.click();

  const handleChangeFile = (files: FileList | null) => {
    if (!files) {
      setFiles([]);
      return;
    }

    setFiles(Array.from(files));
  };

  useImperativeHandle(
    ref,
    () => ({
      getFiles: () => files,
      getFileInfo: () => files.map(({ name, type }) => ({ fileName: name, type })),
      isValidFiles: () =>
        accept?.length ? files.map(({ type }) => type).every((type) => accept.includes(type)) : true,
      removeSpecifiedFile: (index: number) => setFiles((prev) => prev.filter((_, i) => i !== index)),
      clearAllFiles: () => setFiles([])
    }),
    [accept, files]
  );

  return (
    <>
      <img src={fileInputImage} width={160} height={120} style={{ cursor: "pointer" }} onClick={handleClickImage} />
      <input
        ref={fileInputRef}
        type='file'
        multiple={multiple}
        accept={accept && accept.join(",")}
        style={{ display: "none" }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFile(e.currentTarget.files)}
      />
    </>
  );
});
