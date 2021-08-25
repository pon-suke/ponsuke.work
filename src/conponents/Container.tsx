import * as React from "react";
import Link from "next/link";
import Contents from "./Contents";
import SideContents from "./SideContents";
import PageNavi from "./PageNavi";

function Container({ blog, idList, side, id, old = false }) {
  return (
    <>
      <div id="main">
        {blog.map((blog) => (
          <Link key={blog.id} href={(old ? "/old" : "") + `/blog/${id}`}>
            <div>
              <Contents
                key={blog.id}
                title={blog.title}
                subtitle={blog.subtitle}
                text={blog.main}
                date={blog.UpdatedDate}
                class={"articleList maincontent"}
                img={blog.thumbnail ? blog.thumbnail.url : "/top.jpg"}
                old={old}
              />
            </div>
          </Link>
        ))}
      </div>
      {/* <PageNavi idList={idList} params={params} class={"sp_only"}/> */}
      <SideContents data={side} />
      <PageNavi
        totalCount={old ? idList.length : idList.totalCount}
        id={id}
        Class={"pc_only"}
        old={old}
      />
    </>
  );
}

export default Container;
