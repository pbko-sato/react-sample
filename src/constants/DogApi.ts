export const DogApi = {
  /**
   * ランダムな犬の画像を50件取得するエンドポイント
   * @type {string}
   */
  RANDOM_LIST_50: "https://dog.ceo/api/breeds/image/random/50",

  /**
   * 全犬種を取得するエンドポイント
   * @type {string}
   */
  ALL_BREEDS: "https://dog.ceo/api/breeds/list/all"
} as const;
