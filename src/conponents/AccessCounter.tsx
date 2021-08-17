import * as React from "react";
import Script from "next/script";

function AccessCounter({ counter }) {
  // console.log(counter);
  async function test() {
    const response = await fetch("/api/example");
    const data = await response.json();
  }
  // test();

  return (
    <div className={"content counter"}>
      <h2 className="entry_header">アクセス回数(仮)</h2>
      <div className="entry_body">
        {/* 合計：{counter.all}回 <br />
        今日：{counter.today}回 <br />
        昨日：{counter.yesterday}回<br /> */}
        <Script src="/fc2Counter.js"></Script>
        <span id="fc2Counter"></span>&nbsp;回
      </div>
      <div className="entry_footer"></div>
    </div>
  );
}

export default AccessCounter;
