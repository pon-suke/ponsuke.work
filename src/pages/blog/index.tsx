import * as React from "react";
import Footer from "../../conponents/Footer";
import Header from "../../conponents/Header";
import MetaTags from "../../conponents/MetaTags";

function index(params) {
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
      <div>記事を検索する[🔎]</div>
      <div>（制作中でまだないよ）</div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  console.log(req.headers); //see if you have those headers
  return {
    props: {
      headers: req.headers,
    },
  };
}


export default index;
