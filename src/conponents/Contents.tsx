import * as React from "react";

function Contents(props) {
  const createInnerHTML = (str: string) => {
    return { __html: str.replace(/---/g, "<hr>") };
  };
  const ReplaceTags = (str: string) => {
    const tmp = str.replace(/(<br>){1,}/g, "$n$");
    const esc = tmp.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
    return esc.replace(/\$n\$/g, "<br>");
  };
  const unEscapeHTML = (str: string) => {
    return str
      .replace(/(&lt;)/g, "<")
      .replace(/(&gt;)/g, ">")
      .replace(/(&quot;)/g, '"')
      .replace(/(&#39;)/g, "'")
      .replace(/(&amp;)/g, "&")
      .replace(/\\'/g, "'")
      .replace(/\\"/g, '"')
      .replace(/\\\//g, "/")
      .replace(/\\x3c/g, "<")
      .replace(/\\x3e/g, ">")
      .replace(/\\\\/g, "\\");
  };
  const replaceScript = (str: string) => {
    const strs = str.split("$$").map((e) => {
      if (e.startsWith("script")) {
        return unEscapeHTML(e.slice(6).replace(/<br>|&nbsp;/g, ""));
      } else if (e.startsWith("sourcecode")) {
        return unEscapeHTML(e.slice(10).replace(/&nbsp;/g, ""));
      } else {
        return e;
      }
    });
    return strs.join("");
  };

  const cls = props.class + "";
  const caption = props.text.split(/---/)[0] + "...";
  const body = cls.indexOf("articleList")
    ? createInnerHTML(replaceScript(props.text) + "<hr/>")
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
