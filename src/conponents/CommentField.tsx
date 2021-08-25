import * as React from "react";
import useSWR from "swr";
import CommentBlock from "./CommentBlock";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function CommentField({ id, comment = false }) {
  let comments;

  if (!comment) {
    comments = comment;
  } else {
    console.log(false);
    
    const { data, error } = useSWR(process.env.SS_URL, fetcher);
    if (error) return <div>An error has occurred.</div>;
    if (!data) return <div>Loading...</div>;
    comments = data.comment.filter((e) => {
      return e.number == id;
    });
  }
  console.log(comment);
  

  return (
    <>
      <CommentBlock id={id} comments={comments} />
    </>
  );
}

export default CommentField;
