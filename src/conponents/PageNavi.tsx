import * as React from "react";
import Link from "next/link";

function PageNavi({ totalCount, id, Class, old = false }) {
  if (!old) totalCount = Math.ceil(Number(totalCount) / 10);

  return (
    <>
      <div id="pageNavi" className={Class + " p-pagenavi"}>
        <Link href={(old ? "/old" : "") + "/p/1"}>
          <span>≪初めへ</span>
        </Link>
        {[...Array(totalCount)].map((_, i) => (
          <Link key={i} href={(old ? "/old" : "") + `/p/${i + 1}`}>
            <span className={id == i + 1 ? "current" : ""}>&nbsp;{i + 1}&nbsp;</span>
          </Link>
        ))}
        <Link href={(old ? "/old" : "") + "/p/" + totalCount}>
          <span>最後へ≫</span>
        </Link>
      </div>
    </>
  );
}

export default PageNavi;
