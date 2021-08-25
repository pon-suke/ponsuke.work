import * as React from "react";
import Link from "next/link";

function PageNavi({ totalCount, id, Class, old = false }) {
  if (!old) totalCount = Math.ceil(Number(totalCount) / 10);
  id = Number(id);
  const lval = Math.max(id >= totalCount - 2 ? totalCount - 4 : id - 2, 1) - 1;
  const rval = Math.min(id <= 2 ? 5 : id + 2, totalCount) - 1;
  const jump = () => {
    const newPage = Number(window.prompt("Type a number", ""));
    if (newPage) location.href = (old ? "/old" : "") + `/p/${newPage}`;
  };

  return (
    <>
      <div id="pageNavi" className={Class + " p-pagenavi"}>
        <Link href={(old ? "/old" : "") + "/p/1"}>
          <a>≪初めへ</a>
        </Link>
        <>{lval == 0 ? "" : "..."}</>
        {[...Array(totalCount)].flatMap((_, i) =>
          lval <= i && i <= rval ? (
            id == i + 1 ? (
              <span className="current" onClick={jump}>
                &nbsp;{id}&nbsp;
              </span>
            ) : (
              <Link key={i} href={(old ? "/old" : "") + `/p/${i + 1}`}>
                <a>&nbsp;{i + 1}&nbsp;</a>
              </Link>
            )
          ) : (
            <></>
          )
        )}
        <>{rval + 1 == totalCount ? "" : "..."}</>
        <Link href={(old ? "/old" : "") + "/p/" + totalCount}>
          <a>最後へ≫</a>
        </Link>
      </div>
    </>
  );
}

export default PageNavi;
