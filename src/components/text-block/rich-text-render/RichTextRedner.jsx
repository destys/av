import React from "react";

const RichTextRenderer = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return <p key={index}>{block.children[0].text}</p>;
          case "heading":
            return React.createElement(
              `h${block.level}`,
              { key: index },
              block.children[0].text
            );
          case "image":
            return (
              <img key={index} src={block.url} alt={block.alternativeText} />
            );
          case "code":
            return (
              <pre key={index}>
                <code>{block.code}</code>
              </pre>
            );
          case "link":
            return (
              <a key={index} href={block.url}>
                {block.text}
              </a>
            );
          case "list":
            return (
              <ul key={index}>
                {block.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
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
          // Добавьте обработку других типов блоков по мере необходимости
          default:
            return null;
        }
      })}
    </>
  );
};

export default RichTextRenderer;
