import * as React from "react";
import Contents from "./Contents";

function CommentBlock(props) {
  const id = props.comments.length ? "comment" : "noComment";
  const comments = props.comments.length
    ? props.comments
    : [
        {
          comment: "まだコメントがないよ！<br>何か書いていってね",
          date: new Date().toString(),
        },
      ];
  return (
    <>
      <Contents id={id} title="コメント" text="" comments={comments} />
    </>
  );
}

export default CommentBlock;
