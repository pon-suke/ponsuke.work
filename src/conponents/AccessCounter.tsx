import * as React from "react";

function AccessCounter({ counter }) {
  // console.log(counter);
  async function test() {
    const response = await fetch("/api/example");
    const data = await response.json();
  }
  // test();

  return (
    <div className={"content "}>
      <h2 className="entry_header">アクセス回数(仮)</h2>
      <div className="entry_body">
        {/* 合計：{counter.all}回 <br />
        今日：{counter.today}回 <br />
        昨日：{counter.yesterday}回<br /> */}
        <table cellSpacing="0" cellPadding="0">
          <tr>
            <td align="center">
              <img
                src="http://www.rays-counter.com/d491_f6_022/611a3ff6c44ef/"
                alt="アクセスカウンター"
              />
            </td>
          </tr>
        </table>
      </div>
      <div className="entry_footer"></div>
    </div>
  );
}

export default AccessCounter;
