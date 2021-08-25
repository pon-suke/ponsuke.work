import * as React from "react";
import Link from "next/link";

function contentNavi({ idList, id, totalCount, Class }) {
  const isNowIndex = (e) => e.id == id;
  const idIndex = idList.findIndex(isNowIndex);
  const beforeId = idIndex > 0 ? idList[idIndex - 1].id : "";
  const nextId = idIndex < totalCount - 1 ? idList[idIndex + 1].id : "";

  // console.log(idIndex, props.id);

  return (
    <>
      <div id="pageNavi" className={Class + " p-pagenavi"}>
        {idIndex > 0 ? (
          <>
            <Link href={beforeId}>
              <span>前のページへ</span>
            </Link>
            &emsp;
          </>
        ) : undefined}
        <Link href="/p/1">
          <span>ホーム</span>
        </Link>
        {idIndex < totalCount - 1 ? (
          <>
            &emsp;
            <Link href={nextId}>
              <span>次のページへ</span>
            </Link>
          </>
        ) : undefined}
      </div>
    </>
  );
}

export default contentNavi;
