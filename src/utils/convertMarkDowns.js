import React from "react";

export function convertMarkdownLinks(text, classes) {
    const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    const parts = [];
    let lastIndex = 0;

    text.replace(markdownLinkRegex, (match, linkText, url, index) => {
        // Добавляем текст до ссылки
        parts.push(text.substring(lastIndex, index));
        // Добавляем ссылку как React-элемент
        parts.push(
            <a key={index} href={url} target="_blank" className={classes} rel="noopener noreferrer">
                {linkText}
            </a>
        );
        // Обновляем индекс
        lastIndex = index + match.length;
        return match;
    });

    // Добавляем оставшийся текст
    parts.push(text.substring(lastIndex));

    return parts;
}