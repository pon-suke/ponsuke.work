import * as React from "react";
import Link from "next/link";

function contentNavi({ idList, id, totalCount, Class, old = false }) {
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
              <a>前のページへ</a>
            </Link>
            &emsp;
          </>
        ) : undefined}
        <Link href={(old ? "/old" : "") + "/p/1"}>
          <a>ホーム</a>
        </Link>
        {idIndex < totalCount - 1 ? (
          <>
            &emsp;
            <Link href={nextId}>
              <a>次のページへ</a>
            </Link>
          </>
        ) : undefined}
      </div>
    </>
  );
}

export default contentNavi;
