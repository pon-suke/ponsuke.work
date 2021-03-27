import * as React from "react";
import MetaTags from "../conponents/MetaTags";
import Header from "../conponents/Header";
import Container from "../conponents/Container";
import { useRouter } from "next/router";
import About from "../conponents/about";

function Index(props) {
  let blog = props.blog;
    // console.log(props);
  return (
    <div id="wrapper">
      <MetaTags
        title={"pon suke人生リークBlog"}
        description={"ディスクリプション"}
        keyword={"キーワード"}
        image={"https://images.microcms-assets.io/assets/d6d86e72e5224a9dbd45378cc264b6f9/52f527e9bf22406a87bd7271faa3b3ad/d3PsLlagWT6TxffpUAdg.png"}
        url={"http://ponsuke.work/"}
      />
      <Header />
      <Container blog={blog} side={props.side} />
    </div>
  );
}

export async function getServerSideProps(context: { query: any }) {
  const param = context.query;
  let offset = ((param.p ? param.p : 1) - 1) * 10;
  console.log("offset" + offset);
  const key = {
    headers: { "X-API-KEY": "9b30e206-4b28-4453-91f5-5d39d40d15a3" },
  };
  const data = await fetch(
    "https://ponsuke.microcms.io/api/v1/diary?offset=" + offset,
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  const sideData = await fetch(`https://ponsuke.microcms.io/api/v1/side`, key)
    .then((res) => res.json())
    .catch(() => null);

  if (!data || data.contents.lengh) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      blog: data,
      side: sideData,
      params: context.query,
    },
  };
}

export default Index;
