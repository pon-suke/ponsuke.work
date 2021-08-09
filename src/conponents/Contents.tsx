import * as React from "react";

function Contents(props) {
  let createInnerHTML = (str) => {
    return { __html: str.replace(/---/g, "<hr>") };
  };
  let ReplaceTags = (str) => {
    let tmp = str.replace(/(<br>){1,}/g, "$n$");
    let esc = tmp.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
    return esc.replace(/\$n\$/g, "<br>");
  };

  let cls = props.class + "";
  let caption = props.text.split(/---/)[0] + "...";
  let body = cls.indexOf("articleList")
    ? createInnerHTML(props.text + "<hr/>")
    : createInnerHTML(
        `<img class='ThumbnailImage' src=' ${props.img}'>${ReplaceTags(
          caption
        )}<hr/>`
      );

  return (
    <div className={"content " + cls} id={props.id}>
      <h2 className="entry_header">
        {props.title}
        <span>{props.subtitle}</span>
      </h2>
      {props.id == "comment" || props.id == "noComment" ? (
        <div className="entry_body">
          {props.comments.map((e) => (
            <div key={e.date} className="comment_block">
              <img src={e.icon} className="comment_icon" />
              {props.id == "comment" ? (
                <>
                  <h3 className="comment_header">
                    {e.name}
                    <span>{e.date}</span>
                  </h3>
                  <div className="comment_body">{e.comment}</div>
                </>
              ) : (
                <div
                  className="comment_body"
                  dangerouslySetInnerHTML={createInnerHTML(e.comment)}
                ></div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="entry_body" dangerouslySetInnerHTML={body}></div>
      )}
      <div className="entry_footer">
        <div className="pagetop">
          <p>{props.date}</p>
          {/* <a href="#header" title="ページのトップへ">
            ページのトップへ
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Contents;
