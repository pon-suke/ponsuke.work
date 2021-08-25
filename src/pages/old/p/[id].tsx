import * as React from "react";
import MetaTags from "../../../conponents/MetaTags";
import Header from "../../../conponents/Header";
import Container from "../../../conponents/Container";
import Footer from "../../../conponents/Footer";
import { Client } from "../../../conponents/Client";

interface ResponseType {
  contents: String;
  totalCount: number;
  offset: number;
  limit: number;
}

function Page({ blog, side, id }) {
  const idList = [...Array(20)].map((_, i) => ({ id: (i + 1).toString() }));
  return (
    <div id="wrapper">
      <MetaTags
        title={"pon suke人生リークBlog"}
        description={"pon sukeの人生をリークしていくよ！！失踪疾走！"}
        keyword={"失踪者"}
        image={"/top.jpg"}
        url={"https://ponsuke.work/"}
      />
      <Header />
      <Container blog={blog} side={side} idList={idList} id={id} old={true} />
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [...Array(20)].map((_, i) => ({
    params: { id: (i + 1).toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const offset = 192 - ((params.id ? params.id : 1) - 1) * 10;
  console.log(offset);

  const sideData = await Client.get<ResponseType>({
    endpoint: "side",
  });

  const spreadSheetData = await fetch(process.env.SS_URL)
    .then((res) => res.json())
    .catch(() => null);

  if (!spreadSheetData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      blog: spreadSheetData.data.slice(Math.max(offset - 10, 0), Math.min(offset, 192)).reverse(),
      side: sideData,
      id: params.id,
    },
  };
}

export default Page;
