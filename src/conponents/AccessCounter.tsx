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
        {/* <!--カウンタータグここから--> */}
        <table cellPadding="0" cellSpacing="1" className="counter">
          <tr>
            <td>
              <table cellSpacing="1" cellPadding="0">
                {/* 今日 */}
                <tr>
                  <td align="left">
                    <img src="http://www.ezcounter.net/images/todayt.gif" />
                  </td>
                </tr>
                <tr>
                  <td align="left">
                    <img
                      src="http://www.ezcounter.net/tday-d28-f5-112/611a32ed74feb/"
                      alt="アクセスカウンター"
                    />
                  </td>
                </tr>
                {/* 昨日 */}
                <tr>
                  <td align="left">
                    <img src="http://www.ezcounter.net/images/yesterdayt.gif" />
                  </td>
                </tr>
                <tr>
                  <td align="left">
                    <img
                      src="http://www.ezcounter.net/yday-d28-f5-112/611a32ed74feb/"
                      alt="アクセスカウンター"
                    />
                  </td>
                </tr>
                {/* 合計 */}
                <tr>
                  <td align="left">
                    <img src="http://www.ezcounter.net/images/totalt.gif" />
                  </td>
                </tr>
                <tr>
                  <td align="left">
                    <img
                      src="http://www.ezcounter.net/total-d28-f6-112/611a32ed74feb/"
                      alt="アクセスカウンター"
                    />
                  </td>
                </tr>
              </table>
              <table cellPadding="0" cellSpacing="0"></table>
            </td>
          </tr>
        </table>
        {/* <!--カウンタータグここまで--> */}
      </div>
      <div className="entry_footer"></div>
    </div>
  );
}

export default AccessCounter;
