import React, { useState, useEffect } from "react";
import Link from "next/link";

function PageNavi({ totalCount, id, Class, old = false }) {
  const [width, setWidth] = useState(null);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    updateWidth();
    window.addEventListener(`resize`, updateWidth, {
      capture: false,
      passive: true,
    });

    return () => window.removeEventListener(`resize`, updateWidth);
  });

  if (!old) totalCount = Math.ceil(Number(totalCount) / 10);
  id = Number(id);
  const mar = width < 800 ? 1 : 2;
  const lval = Math.max(id >= totalCount - mar ? totalCount - mar * 2 : id - mar, 1) - 1;
  const rval = Math.min(id <= mar ? mar * 2 + 1 : id + mar, totalCount) - 1;
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
              <span key={i} className="current" onClick={jump}>
                &nbsp;{id}&nbsp;
              </span>
            ) : (
              <Link key={i} href={(old ? "/old" : "") + `/p/${i + 1}`}>
                <a>&nbsp;{i + 1}&nbsp;</a>
              </Link>
            )
          ) : (
            <React.Fragment key={i}></React.Fragment>
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
