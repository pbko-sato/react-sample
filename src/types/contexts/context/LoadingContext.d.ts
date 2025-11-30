export interface LoadingContextValue {
  /**
   * ローディング状態
   * @type {boolean}
   */
  loading: boolean;
}

export interface LoadingContextDispatch {
  /**
   * ローディング状態を更新する
   * @param {boolean} loading
   * @returns {void}
   */
  updateLoading: (loading: boolean) => void;
}
