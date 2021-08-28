import React from "react";
import {
  SearchBox,
  InstantSearch,
  Configure,
} from "react-instantsearch-dom";
import "instantsearch.css/themes/satellite-min.css";
import { searchClient, algoliaSettings } from "./SearchClient";
import { SearchResult } from "./SearchResult";

function Search() {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName={algoliaSettings.indexName}>
        <Configure hitsPerPage={5} />
        <SearchBox translations={{ placeholder: "記事を検索" }} />
        <SearchResult />
      </InstantSearch>
    </>
  );
}

export default Search;
