import * as React from "react";
import Contents from "../../conponents/Contents";
import MetaTags from "../../conponents/MetaTags";
import Header from "../../conponents/Header";
import SideContents from "../../conponents/SideContents";
import { Client } from "../../conponents/Client";
import ContentNavi from "../../conponents/ContentNavi";
import Footer from "../../conponents/Footer";
import CommentForm from "../../conponents/CommentForm";
import CommentField from "../../conponents/CommentField";

interface id {
  id: string;
}
interface ResponseType {
  contents: Array<id>;
  totalCount: number;
  offset: number;
  limit: number;
}

function Page(props) {
  let removeTags = (str) => {
    let esc = str.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
    return esc;
  };
  let blog = props.blog;
  let caption = removeTags(blog.main.split(/---/)[0] + "...");
  return (
    <>
      <div id="wrapper">
        <MetaTags
          title={"pon suke人生リークBlog"}
          description={caption}
          keyword={"キーワード"}
          image={blog.thumbnail.url}
          url={`https://ponsuke.work/${blog.id}`}
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
          <CommentField id={blog.id} />
          <CommentForm id={blog.id} />
        </div>
        <ContentNavi idList={props.idList} id={blog.id} class="sp_only" />
        <SideContents data={props.side} counter={props.counter} />
        <ContentNavi idList={props.idList} id={blog.id} class="pc_only" />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const idList = await Client.get<ResponseType>({
    endpoint: "diary",
    queries: { limit: 10e10, fields: "id" },
  });
  const paths = idList.contents.map((e) => ({
    params: { id: e.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  const idQuery = params.id;
  console.log("id " + idQuery);

  const data = await Client.get<ResponseType>({
    endpoint: "diary",
    contentId: idQuery,
  });

  const sideData = await Client.get<ResponseType>({
    endpoint: "side",
  });

  const idList = await Client.get<ResponseType>({
    endpoint: "diary",
    queries: { limit: 10e10, fields: "id" },
  });

  const spreadSheetData = await fetch(process.env.SS_URL)
    .then((res) => res.json())
    .catch(() => null);
  // console.log(spreadSheetData);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog: data,
      side: sideData,
      idList: idList,
      counter: spreadSheetData.accessCounter,
    },
  };
}

export default Page;
