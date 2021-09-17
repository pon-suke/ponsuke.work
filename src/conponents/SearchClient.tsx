import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite-min.css";
import { MultipleQueriesQuery } from "@algolia/client-search";

// Algoliaの管理画面から取得できる環境変数を設定
// APIキーは「Search-Only API Key」の方
export const algoliaSettings = {
  searchClient: algoliasearch(`${process.env.ALGOLIA_APP_ID}`, `${process.env.ALGOLIA_API_KEY}`),
  indexName: "ponsuke_work_old",
};

export const index = algoliaSettings.searchClient.initIndex(algoliaSettings.indexName);

export const searchClient = {
  ...algoliaSettings,
  search(requests: MultipleQueriesQuery[]) {
    if (requests.every(({ params }) => !params?.query)) {
      return Promise.resolve(mock);
    }
    return algoliaSettings.searchClient.search(requests);
  },
};

// 検索結果なしのモック情報
const mock = {
  hits: [],
  nbHits: 0,
  nbPages: 0,
  page: 0,
  processingTimeMS: 0,
};
