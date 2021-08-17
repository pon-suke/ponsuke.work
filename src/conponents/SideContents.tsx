import * as React from "react";
import Contents from "./Contents";
import AccessCounter from "./AccessCounter";

function SideContents(props) {
  let data = props.data.contents;

  return (
    <div id="side">
      開発環境
      {data.map((d) => (
        <Contents
          key={d.id}
          title={d.title}
          subtitle={d.subtitle}
          text={d.content}
          // date={blog.updatedAt}
          id="profile"
        />
      ))}
      <AccessCounter counter={props.counter} />
    </div>
  );
}

export default SideContents;
