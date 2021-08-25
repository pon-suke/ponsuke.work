import * as React from "react";
import Contents from "../../../conponents/Contents";
import MetaTags from "../../../conponents/MetaTags";
import Header from "../../../conponents/Header";
import SideContents from "../../../conponents/SideContents";
import { Client } from "../../../conponents/Client";
import ContentNavi from "../../../conponents/ContentNavi";
import Footer from "../../../conponents/Footer";
import CommentForm from "../../../conponents/CommentForm";
import CommentField from "../../../conponents/CommentField";

interface id {
  id: string;
}
interface ResponseType {
  contents: Array<id>;
  totalCount: number;
  offset: number;
  limit: number;
}

function Page({ blog, comment, side, id }) {
  const removeTags = (str) => {
    return str.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
  };
  const caption = removeTags(blog.main.split(/日/)[0] + "...");
  const idList = [...Array(192)].map((_, i) => ({ id: (i+1).toString() }));
  // console.log(blog);

  return (
    <>
      <div id="wrapper">
        <MetaTags
          title={"pon suke人生リークBlog"}
          description={caption}
          keyword={"キーワード"}
          image={"/top.jpg"}
          url={`https://ponsuke.work/old/blog/${blog.id}`}
        />
        <Header />
        <div id="main">
          <Contents
            title={blog.title}
            subtitle={blog.subTitle}
            text={blog.main.replace(/\r?\n/g, "<br>")}
            date={blog.UpdatedDate}
            class={"maincontent"}
          />
          <CommentField id={id} comment={comment} />
          <CommentForm id={id} />
        </div>
        {/* <ContentNavi idList={idList} id={id} class="sp_only" /> */}
        <SideContents data={side} />
        <ContentNavi idList={idList} id={id} totalCount="192" Class="pc_only" old={true}/>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  // 現在の旧記事の数が192でこれから増える予定はないのでいったん固定
  const paths = [...Array(192)].map((_, i) => ({
    params: { id: (i + 1).toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const sideData = await Client.get<ResponseType>({
    endpoint: "side",
  });

  const spreadSheetData = await fetch(process.env.SS_URL)
    .then((res) => res.json())
    .catch(() => null);
  // console.log(spreadSheetData.comment.filter((e) => e.number == id));

  if (!spreadSheetData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog: spreadSheetData.data[id - 1],
      comment: spreadSheetData.comment.filter((e) => e.number == id),
      side: sideData,
      id: id,
    },
  };
}

export default Page;
