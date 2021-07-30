import * as React from "react";
import Contents from "./Contents";
import Link from "next/link";
import AccessCounter from "./AccessCounter";

function SideContents(props) {
  let data = props.data.contents;

  return (
    <div id="side">
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
