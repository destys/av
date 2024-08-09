"use client";
import { replaceVariablesInText } from "@/utils/extractDataFromParams";
import FAQItem from "./faq-item/FaqItem";

import styles from "./FAQ.module.scss";
import { useState } from "react";
import Button from "../ui/button/Button";

export default function FAQ({ data, params }) {
  if (!data) return null;

  const faqs = data.attributes.faqs;
  const [faqsList, setFaqsList] = useState(faqs.slice(0, 5));

  return (
    <section className={styles.faq}>
      <div className="container py-5 px-[15px] xs:py-large xs:px-5 sm:p-large md:py-x-large xl:px-x-large bg-lynch-100 rounded-2xl xs:rounded-large">
        <h2 className="mb-space-large xl:mb-x-large">
          {/* {replaceVariablesInText(data.attributes.title, params)} */}
          {data.attributes.title}
        </h2>
        <div className={styles.list}>
          {faqsList.map((item) => (
            <FAQItem key={item.id} item={item} params={params} />
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
      </div>
    </section>
  );
}
