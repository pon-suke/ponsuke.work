import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Hits, Highlight, Pagination, connectSearchBox, PoweredBy } from "react-instantsearch-dom";
import CustomHighlight from "./CustomHighlight";
import "instantsearch.css/themes/satellite-min.css";

let searching = false;

// ヒットした項目をリンクとして表示
// Highlightを入れておくと検索と一致したところにスタイルを当てられる
const Hit = ({ hit, onClick }) => {
  return (
    <Link href={(hit.id.length < 4 ? "/old" : "") + `/blog/${hit.id}`}>
      <div onClick={onClick} className="searchItem">
        <CustomHighlight attribute={"title"} hit={hit} />
        {/* <CustomHighlight attribute={"subTitle"} hit={hit}/> */}
        <CustomHighlight attribute={"main"} hit={hit} />
      </div>
    </Link>
  );
};

export const SearchResult = connectSearchBox(({ refine, currentRefinement }) => {
  // refine: function => 現状のクエリを変更
  // currentRefinement: string => 現状のクエリ
  const [isShow, setShow] = useState<boolean>(false);

  // マウント時に実行
  useEffect(() => {
    searching = !currentRefinement;
    // !! は currentRefinement が空文字か判定 (true or false)
    setShow(!!currentRefinement); // => 空文字は表示しないようにセットされる
  }, [currentRefinement]);

  // リセットと同時に useCallback でメモ化して無駄なレンダリングを防ぐ
  const handleResetSearchWords = useCallback(() => {
    refine(""); // クエリを空文字に指定してリセット
  }, [refine]);

  const hitComponent = ({ hit }: any) => <Hit hit={hit} onClick={handleResetSearchWords} />;

  return (
    <>
      <div hidden={searching}>
        <Hits hitComponent={hitComponent} />
        <Pagination totalPages={4} />
        <PoweredBy />
      </div>
    </>
  );
});
