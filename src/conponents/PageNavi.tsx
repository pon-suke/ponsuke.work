import * as React from "react";
import Link from "next/link";

function PageNavi(props) {
  const totalCount = props.idList.totalCount;
  const pages = Math.ceil(Number(totalCount) / 10);
  const pageNum = props.params.p ? props.params.p : 1;

  return (
    <>
      <div id="pageNavi" className={props.class + " p-pagenavi"}>
        <Link href="?p=1">
          <span>≪初めへ</span>
        </Link>
        {[...Array(pages)].map((_, i) => (
          <Link key={i} href={`?p=${i + 1}`}>
            <span className={pageNum == i + 1 ? "current" : ""}>
              &nbsp;{i + 1}&nbsp;
            </span>
          </Link>
        ))}
        <Link href={"?p=" + pages}>
          <span>最後へ≫</span>
        </Link>
      </div>
    </>
  );
}

export default PageNavi;
