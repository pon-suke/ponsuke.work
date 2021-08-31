import React from "react";
import { SearchBox, InstantSearch, Configure } from "react-instantsearch-dom";
import "instantsearch.css/themes/satellite-min.css";
import { searchClient, algoliaSettings } from "./SearchClient";
import { SearchResult } from "./SearchResult";

function Search() {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName={algoliaSettings.indexName}>
        {/* 表示される検索結果数 */}
        <Configure hitsPerPage={5} />

        {/* 検索窓 */}
        <SearchBox translations={{ placeholder: "検索ワード" }} />

        {/* 検索結果 */}
        <SearchResult />
      </InstantSearch>
    </>
  );
}

export default Search;
