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
  ALL_BREEDS: "https://dog.ceo/api/breeds/list/all",

  /**
   * 犬種ごとのランダムな犬の画像を10000件取得するエンドポイント
   * @type {string}
   */
  RANDOM_LIST_10000_BY_BREED: "https://dog.ceo/api/breed/:breed/images/random/10000",

  /**
   * サブ犬種ごとのランダムな犬の画像を10000件取得するエンドポイント
   * @type {string}
   */
  RANDOM_LIST_10000_BY_SUB_BREED: "https://dog.ceo/api/breed/:breed/:sub-breed/images/random/10000"
} as const;
