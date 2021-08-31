import { connectHighlight } from "react-instantsearch-dom";

const Highlight = ({ highlight, attribute, hit}) => {
  const parsedHit = highlight({
    highlightProperty: "_highlightResult",
    attribute,
    hit,
  });
  const summarizeText = (txt: string) => {
    let strs = txt.split("\n");
    if (attribute == "title" || strs.length <= 3) return txt;
    return strs[0] + " ... " + strs[strs.length - 1];
  };

  console.log(parsedHit);

  return (
    <div>
      {parsedHit.map((part, index) =>
        part.isHighlighted ? (
          <mark key={index}>{part.value}</mark>
        ) : (
          <span key={index}>{summarizeText(part.value)}</span>
        )
      )}
    </div>
  );
};

export default connectHighlight(Highlight);
