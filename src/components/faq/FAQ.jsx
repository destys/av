import { replaceVariablesInText } from "@/utils/extractDataFromParams";
import FAQItem from "./faq-item/FaqItem";

import styles from "./FAQ.module.scss";

export default function FAQ({ data, params }) {
  if (!data) return null;

  const faqs = data.attributes.faqs;

  return (
    <section className={styles.faq}>
      <div className="container py-5 px-[15px] xs:py-large xs:px-5 sm:p-large md:py-x-large xl:px-x-large bg-lynch-100 rounded-2xl xs:rounded-large">
        <h2 className="mb-space-large xl:mb-x-large">
          {replaceVariablesInText(data.attributes.title, params)}
        </h2>
        <div className={styles.list}>
          {data.attributes.faqs.map((item) => (
            <FAQItem key={item.id} item={item} params={params} />
          ))}
        </div>
      </div>
    </section>
  );
}