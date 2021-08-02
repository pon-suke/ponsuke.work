import * as React from "react";
import MetaTags from "../conponents/MetaTags";
import Header from "../conponents/Header";
import Container from "../conponents/Container";
import Footer from "../conponents/Footer";
import { client } from "../conponents/client";

interface ResponseType {
  contents: String;
  totalCount: number;
  offset: number;
  limit: number;
}

function Index(props) {
  const blog = props.blog;
  const side = props.side;
  const idList = props.idList;
  const params = props.params;
  const counter = props.counter;
  return (
    <div id="wrapper">
      <MetaTags
        title={"pon suke人生リークBlog"}
        description={"ディスクリプション"}
        keyword={"キーワード"}
        image={
          "https://images.microcms-assets.io/assets/d6d86e72e5224a9dbd45378cc264b6f9/52f527e9bf22406a87bd7271faa3b3ad/d3PsLlagWT6TxffpUAdg.png"
        }
        url={"https://ponsuke.work/"}
      />
      <Header />
      <Container
        blog={blog}
        side={side}
        idList={idList}
        params={params}
        counter={counter}
      />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context: { query: any }) {
  const param = context.query;
  const offset = ((param.p ? param.p : 1) - 1) * 10;

  const blog = await client.get<ResponseType>({
    endpoint: "diary",
    queries: { offset: offset },
  });

  const sideData = await client.get<ResponseType>({
    endpoint: "side",
  });

  const idList = await client.get<ResponseType>({
    endpoint: "diary",
    queries: { limit: blog.totalCount, fields: "id" },
  });

  const spreadSheetData = await fetch(process.env.SS_URL)
    .then((res) => res.json())
    .catch(() => null);

  if (!blog) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      blog: blog,
      side: sideData,
      params: context.query,
      idList: idList,
      counter: spreadSheetData.accessCounter,
    },
  };
}

export default Index;
