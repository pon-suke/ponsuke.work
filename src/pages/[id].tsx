import React from "react";
import Contents from "../conponents/Contents";
import MetaTags from "../conponents/MetaTags";
import Header from "../conponents/Header";
import Container from "../conponents/Container";
import SideContents from "../conponents/SideContents";

function Page(props) {
  let removeTags = (str) => {
    let esc = str.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
    return esc;
  };
  let blog = props.blog;
  let caption = removeTags(blog.main.split(/---/)[0] + "...");
  return (
    <div id="wrapper">
      <MetaTags
        title={"pon suke人生リークBlog"}
        description={caption}
        keyword={"キーワード"}
        image={blog.thumbnail.url}
        url={`http://ponsuke.work/${blog.id}`}
      />
      <Header />
      <div id="main">
        <Contents
          key={blog.id}
          title={blog.title}
          subtitle={blog.subtitle}
          text={blog.main}
          date={blog.updatedAt}
          class={"maincontent"}
        />
      </div>
      <SideContents data={props.side} />
    </div>
  );
}

export async function getServerSideProps(context: { query: any }) {
  const param = context.query;
  let offset = ((param.p ? param.p : 1) - 1) * 10;
  const { id } = context.query;
  console.log("offset" + id);
  const key = {
    headers: { "X-API-KEY": "9b30e206-4b28-4453-91f5-5d39d40d15a3" },
  };
  const data = await fetch(
    `https://ponsuke.microcms.io/api/v1/diary/${id}`,
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  const sideData = await fetch(`https://ponsuke.microcms.io/api/v1/side`, key)
    .then((res) => res.json())
    .catch(() => null);

  if (!data) {
    console.log("data " + data);
    return {
      notFound: true,
    };
  }
  return {
    props: {
      blog: data,
      side: sideData,
    },
  };
}

export default Page;
