import * as React from "react";

function CommentForm(props) {
  const pageID = props.id;
  const commentSended = () => {
    const commentLoading = document.getElementById("commentLoading");
    const commentName = document.getElementById("commentName");
    const comment = document.getElementById("comment");
    const isSend = commentName.value && comment.value;

    commentLoading.style.display = "none";
    if (isSend) {
      commentName.value = "";
      comment.value = "";
      location.reload();
    }
  };

  const commentSending = () => {
    const commentLoading = document.getElementById("commentLoading");
    const name = document.getElementById("commentName");
    const comment = document.getElementById("comment");

    if (!name.value || !comment.value) {
      alert("名前とコメントを入力してください");
      return false;
    }
    const date = document.getElementById("commentDate");
    date.value = new Date().toISOString();
    commentLoading.style.display = "flex";
    return true;
  };

  return (
    <>
      <form
        id="comment_form"
        method="POST"
        action={process.env.SS_POST_URL}
        target="response"
        onSubmit={commentSending}
      >
        <div>名前</div>
        <input
          className="comment_form"
          type="text"
          name="name"
          id="commentName"
          placeholder="name"
        />
        <label>
          コメント
          <textarea
            className="comment_form"
            name="comment"
            id="comment"
            placeholder="comment"
          ></textarea>
        </label>
        <input type="hidden" name="icon" value="" />
        <input type="hidden" name="number" value={pageID} />
        <input type="hidden" name="date" id="commentDate" value="" />
        <input id="commentSubmit" type="submit" value="送信" />
        <div id="commentLoading" className="commentLoading">
          <span>コメント送信中</span>
          <div className="commentCircle"></div>
        </div>
      </form>
      <iframe name="response" id="response" onLoad={commentSended}></iframe>
    </>
  );
}

export default CommentForm;
