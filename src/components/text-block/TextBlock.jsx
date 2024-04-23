"use client";

import styles from "./TextBlock.module.scss";
import Button from "../ui/button/Button";
import { useState } from "react";
import RichTextRenderer from "./rich-text-render/RichTextRedner";

export default function TextBlock({ content }) {
  console.log('content: ', content);
  const [open, setOpen] = useState(false);

  if (!content) {
    return null;
  }

  return (
    <section className={styles.text}>
      <div className="container py-2.5 px-[15px] xs:p-5 sm:p-large md:py-x-large xl:px-x-large ">
        <h2 className="mb-[15px] xs:mb-space-large xl:mb-x-large">
          Вызов автопомощи в Москве и Подмосковье
        </h2>
        <div className={`${styles.content} ${open && "!max-h-none"}`}>
          <RichTextRenderer blocks={content} />
        </div>
        {!open && (
          <Button
            style={"outlined-full"}
            icon={"arrow-down"}
            onClick={() => setOpen(!open)}
            className={"mt-5 sm:mt-space-large xl:mt-x-large"}
          >
            Читать подробнее
          </Button>
        )}
      </div>
    </section>
  );
}
