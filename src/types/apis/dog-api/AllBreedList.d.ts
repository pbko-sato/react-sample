export interface ALL_BREEDS_RESPONSE {
  /**
   * 犬種の配列
   * @type {{ [key: string]: string[] }}
   */
  message: { [key: string]: string[] };

  /**
   * ステータス
   * @type {"success"}
   */
  status: "success";
}
