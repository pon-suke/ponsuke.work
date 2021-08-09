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
      <div>自己紹介ページ</div>
      <div>ラーメン大好き</div>
      <Footer />
    </div>
  );
}

export default index;
