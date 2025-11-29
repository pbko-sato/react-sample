export interface FileInputRef {
  /**
   * 現在のファイルを取得する
   * @returns {File[]}
   */
  getFiles: () => File[];

  /**
   * 現在のファイルの名称・MIMEを取得する
   * @returns {{fileName: string; type: string }[]}
   */
  getFileInfo: () => { fileName: string; type: string }[];

  /**
   * `accept`属性に含まれるファイルのみがアップロードされているかを検証する
   * @returns {boolean}
   */
  isValidFiles: () => boolean;

  /**
   * 現在設定されているすべてのファイルを削除する
   * @param {number} index
   * @returns {void}
   */
  removeSpecifiedFile: (index: number) => void;

  /**
   * 現在設定されているすべてのファイルを削除する
   * @returns {void}
   */
  clearAllFiles: () => void;
}
