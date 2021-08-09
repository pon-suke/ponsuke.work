import * as React from "react";
import Link from "next/link";
import Contents from "./Contents";
import SideContents from "./SideContents";
import PageNavi from "./PageNavi";

function Container(props) {
  let blog = props.blog.contents;
  return (
    <>
      <div id="main">
        {blog.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <div>
              <Contents
                key={blog.id}
                title={blog.title}
                subtitle={blog.subtitle}
                text={blog.main}
                date={blog.updatedAt}
                class={"articleList maincontent"}
                img={blog.thumbnail.url}
              />
            </div>
          </Link>
        ))}
      </div>
      <PageNavi idList={props.idList} params={props.params} class={"sp_only"}/>
      <SideContents data={props.side} counter={props.counter}/>
      <PageNavi idList={props.idList} params={props.params} class={"pc_only"}/>
    </>
  );
}

export default Container;
