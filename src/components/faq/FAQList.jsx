"use client";

import { useState } from "react";
import Button from "../ui/button/Button";
import FAQItem from "./faq-item/FaqItem";
import styles from "./FAQ.module.scss";

export const FAQList = ({ data }) => {
  const faqs = data.attributes.faqs;
  const [faqsList, setFaqsList] = useState(faqs.slice(0, 5));

  return (
    <>
      <div className={styles.list}>
        {faqsList.map((item) => (
          <FAQItem key={item.id} item={item} />
        ))}
      </div>
      {faqsList.length !== faqs.length && (
        <Button
          style={"outlined-full"}
          icon={"arrow-down"}
          onClick={() => setFaqsList(faqs)}
          className={"mt-5 sm:mt-space-large xl:mt-x-large"}
        >
          Показать все
        </Button>
      )}
    </>
  );
};
