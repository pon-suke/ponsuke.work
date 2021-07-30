import * as React from "react";

function CommentForm(props) {
  const pageID = props.id;
  const registerUser = async (e) => {
    e.preventDefault();

    const sendData = {
      name: e.target[0].value,
      comment: e.target[1].value,
      number: e.target[3].value,
      date: new Date(),
    };
    console.log(sendData);

    const postparam = {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(sendData),
    };

    // fetch(process.env.SS_POST_URL, postparam);
  };

  return (
    <>
      <form
        id="comment_form"
        method="POST"
        // action="https://script.google.com/macros/s/AKfycbyz6ExRu_qVdKfcjgj0kJD2V0neL44N3ueFtnWTC3dPkWg630arI0D7_qvmRqjiuRU/exec"
          onSubmit={registerUser}
      >
        <div>名前</div>
        <input
          className="comment_form"
          type="text"
          name="name"
          placeholder="name"
        />
        <label>
          コメント
          <textarea
            className="comment_form"
            name="comment"
            placeholder="comment"
          ></textarea>
        </label>
        <input type="hidden" name="icon" value="" />
        <input type="hidden" name="number" value={pageID} />
        <input id="commentSubmit" type="submit" value="送信" />
      </form>
    </>
  );
}

export default CommentForm;
