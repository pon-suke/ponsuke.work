import * as React from "react";
import MetaTags from "../../conponents/MetaTags";
import Header from "../../conponents/Header";
import Container from "../../conponents/Container";
import Footer from "../../conponents/Footer";
import { Client } from "../../conponents/Client";

interface ResponseType {
  contents: String;
  totalCount: number;
  offset: number;
  limit: number;
}

function Page(props) {
  const blog = props.blog;
  const side = props.side;
  const idList = props.idList;
  const params = props.params;
  const counter = props.counter;
  return (
    <div id="wrapper">
      <MetaTags
        title={"pon suke人生リークBlog"}
        description={"pon sukeの人生をリークしていくよ！！失踪疾走！"}
        keyword={"失踪者"}
        image={"/top.jpg"}
        url={"https://ponsuke.work/old"}
      />
      <Header />
      <Container blog={blog.contents} side={side} idList={idList} id={params.id} />
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const idList = await Client.get<ResponseType>({
    endpoint: "diary",
    queries: { limit: 10e10, fields: "id" },
  });
  const len = new Array(Math.ceil(idList.totalCount / 10)).fill(1).map((n, i) => n + i);
  const paths = len.map((e, index) => ({
    params: { id: (index + 1).toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const offset = ((params.id ? params.id : 1) - 1) * 10;

  const blog = await Client.get<ResponseType>({
    endpoint: "diary",
    queries: { offset: offset },
  });

  const sideData = await Client.get<ResponseType>({
    endpoint: "side",
  });

  const idList = await Client.get<ResponseType>({
    endpoint: "diary",
    queries: { limit: blog.totalCount, fields: "id" },
  });

  // const spreadSheetData = await fetch(process.env.SS_URL)
  //   .then((res) => res.json())
  //   .catch(() => null);

  if (!blog) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      blog: blog,
      side: sideData,
      params: params,
      idList: idList,
    },
  };
}

export default Page;
