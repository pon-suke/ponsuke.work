import * as React from "react";
import useSWR from "swr";
import CommentBlock from "./CommentBlock";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function CommentField(props) {
  const { data, error } = useSWR(process.env.SS_URL, fetcher);

  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;
  const comments = data.comment.filter((e) => {
    return e.number == props.id;
  });
  return (
    <>
      <CommentBlock id={props.id} comments={comments} />
    </>
  );
}

export default CommentField;
