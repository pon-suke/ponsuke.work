import * as React from "react";
import Link from "next/link";
import Contents from "./Contents";
import SideContents from "./SideContents";
import PageNavi from "./PageNavi";

function Container({ blog, idList, side, id, old = false }) {
  // console.log(blog);
  return (
    <>
      <div id="main">
        {blog.map((blog) => (
          <Link key={blog.id} href={(old ? "/old" : "") + `/blog/${blog.id}`}>
            <div>
              <Contents
                key={blog.id}
                title={blog.title}
                subtitle={blog.subTitle}
                text={blog.main}
                date={old ? blog.UpdatedDate : blog.updatedAt}
                class={"articleList maincontent"}
                img={blog.thumbnail ? blog.thumbnail.url : "/top.jpg"}
                old={old}
              />
            </div>
          </Link>
        ))}
      </div>
      <PageNavi
        totalCount={old ? idList.length : idList.totalCount}
        id={id}
        Class={"sp_only"}
        old={old}
      />
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
