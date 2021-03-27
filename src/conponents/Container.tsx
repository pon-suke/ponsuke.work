import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Contents from "./Contents";
import SideContents from "./SideContents";

interface Props {
  p: String;
}

function Container(props) {
  let blog = props.blog.contents;
  // console.log("container")
  // console.log(props);
  return (
    <>
      <div id="main">
        {blog.map((blog) => (
          <Link key={blog.id} href={`${blog.id}`}>
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
      <SideContents data={props.side} />
    </>
  );
}

export default Container;
