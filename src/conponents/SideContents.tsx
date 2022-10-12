import * as React from "react";
import Contents from "./Contents";
import AccessCounter from "./AccessCounter";

function SideContents(props) {
  const data = props.data.contents;

  return (
    <div id="side">
      {data.map((d) => (
        <Contents
          key={d.id}
          title={d.title}
          subtitle={d.subtitle}
          text={d.content}
          // date={blog.updatedAt}
          id={d.title == "プロフィール" ? "profile" : ""}
        />
      ))}
      <AccessCounter />
    </div>
  );
}

export default SideContents;
