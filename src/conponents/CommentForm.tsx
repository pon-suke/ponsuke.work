import * as React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function CommentForm(props) {
  const pageID = props.id;
  const options = [
    {
      value:
        "https://images.microcms-assets.io/assets/d6d86e72e5224a9dbd45378cc264b6f9/b04438c6486e4b7abc06fbc6f02c6e01/%E9%9C%8A%E5%A4%A2.png",
      label: "霊夢",
    },
    {
      value:
        "https://images.microcms-assets.io/assets/d6d86e72e5224a9dbd45378cc264b6f9/8273abdb272044eda2bcf06afa23b0da/%E9%AD%94%E7%90%86%E6%B2%99.png",
      label: "魔理沙",
    },
    {
      value:
        "https://images.microcms-assets.io/assets/d6d86e72e5224a9dbd45378cc264b6f9/dc0dcae55f564035a224778b82cbabb5/%E5%A6%96%E5%A4%A2.png",
      label: "妖夢",
    },
  ];
  const defaultOption = options[0];

  const commentSended = () => {
    const commentLoading = document.getElementById("commentLoading");
    const name = document.getElementById("commentName") as HTMLInputElement;
    const comment = document.getElementById("commentArea") as HTMLInputElement;
    const isSend = name.value && comment.value;

    commentLoading.style.display = "none";
    if (isSend) {
      name.value = "";
      comment.value = "";
      location.reload();
    }
  };

  const commentSending = () => {
    const commentLoading = document.getElementById("commentLoading");
    const name = document.getElementById("commentName") as HTMLInputElement;
    const comment = document.getElementById("commentArea") as HTMLInputElement;

    if (!name.value || !comment.value) {
      alert("名前とコメントを入力してください");
      return false;
    }
    const date = document.getElementById("commentDate") as HTMLInputElement;
    date.value = new Date().toISOString();
    commentLoading.style.display = "flex";
    return true;
  };

  const changeIcon = (e) => {
    const img = document.getElementById("commentIconImg") as HTMLImageElement;
    img.src = e.value;
    const icon = document.getElementById("commentIcon") as HTMLInputElement;
    icon.value = e.value;
    console.log(e);
  };

  return (
    <>
      <form
        id="comment_form"
        method="POST"
        action={process.env.NEXT_PUBLIC_SS_POST_URL}
        target="response"
        onSubmit={commentSending}
      >
        <div>
          アイコン
          <br />
          <img id="commentIconImg" src={options[0].value} alt="icon" />
          <Dropdown
            className="commentIconList"
            options={options}
            value={defaultOption}
            placeholder="Select an option"
            onChange={changeIcon}
          />
        </div>
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
            id="commentArea"
            placeholder="comment"
          ></textarea>
        </label>
        <input type="hidden" name="icon" id="commentIcon" value={options[0].value} />
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
