import React from "react";

const renderBlock = (block, index) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index}>
          {block.children.map((child, idx) => renderBlock(child, idx))}
        </p>
      );
    case "heading":
      return React.createElement(
        `h${block.level}`,
        { key: index },
        block.children.map((child, idx) => renderBlock(child, idx))
      );
    case "image":
      return <img key={index} src={block.url} alt={block.alternativeText} />;
    case "code":
      return (
        <pre key={index}>
          <code>{block.code}</code>
        </pre>
      );
    case "link":
      return (
        <a key={index} href={block.url}>
          {block.children.map((child, idx) => renderBlock(child, idx))}
        </a>
      );
    case "list":
      return (
        <ul key={index} className="mb-2">
          {block.children.map((item, idx) => (
            <li key={idx} className="list-inside list-disc mb-1">
              {item.children.map((child, childIdx) =>
                renderBlock(child, childIdx)
              )}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote key={index}>
          <p>{block.quote}</p>
          {block.author && <footer>{block.author}</footer>}
        </blockquote>
      );
    case "text":
      return (
        <span
          key={index}
          style={{
            fontWeight: block.bold ? "bold" : "normal",
            fontStyle: block.italic ? "italic" : "normal",
          }}
        >
          {block.text}
        </span>
      );
    default:
      return null;
  }
};

const RichTextRenderer = ({ blocks, params }) => {
  return <>{blocks.map((block, index) => renderBlock(block, index))}</>;
};

export default RichTextRenderer;
