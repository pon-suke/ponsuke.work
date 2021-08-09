import * as React from "react";

function CommentForm(props) {
  const pageID = props.id;

  return (
    <>
      <form
        id="comment_form"
        method="POST"
        action="https://script.google.com/macros/s/AKfycbwa4kwbrmRLGJ1pZL-gUv1WMhjadTOnhrx_tUhKE3HOC6QYAPIVqQRPDM-izH0KDe9W/exec"
        target="response"
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

      <iframe name="response" id="response"></iframe>
      <script id="hge" src="/comment.js"></script>
    </>
  );
}

export default CommentForm;
