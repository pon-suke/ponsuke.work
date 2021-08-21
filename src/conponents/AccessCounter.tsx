import * as React from "react";
import Script from "next/script";

function AccessCounter() {
  async function test() {
    const response = await fetch("/api/example");
    const data = await response.json();
  }
  // test();

  return (
    <div className={"content counter"}>
      <h2 className="entry_header">アクセス回数(仮)</h2>
      <div className="entry_body">
        <Script id="fc2scr" src="/fc2Counter.js"></Script>
        <span id="fc2Counter"></span>&nbsp;回
      </div>
      <div className="entry_footer"></div>
    </div>
  );
}

export default AccessCounter;
