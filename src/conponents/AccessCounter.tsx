import * as React from "react";

function AccessCounter(props) {
  const counter = props.counter;

  return (
    <div className={"content "}>
      <h2 className="entry_header">ただ今のアクセス回数</h2>
      <div className="entry_body">
        合計：{counter.all}回 <br />
        今日：{counter.today}回 <br />
        昨日：{counter.yesterday}回
      </div>
      <div className="entry_footer"></div>
    </div>
  );
}

export default AccessCounter;
