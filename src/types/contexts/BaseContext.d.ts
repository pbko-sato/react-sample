export interface BaseContext<V, D> {
  /**
   * contextの値を格納するオブジェクト
   * @type {V}
   */
  contextValue: V;

  /**
   * contextの操作関数を格納するオブジェクト
   * @type {D}
   */
  dispatch: D;
}
