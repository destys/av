import getPage from "@/actions/GetPage";
import FAQItem from "./faq-item/FaqItem";

import styles from "./FAQ.module.scss";

export default async function FAQ() {
  const faq = await getPage("faq", "faqs");

  if (!faq) return null;

  return (
    <section className={styles.faq}>
      <div className="container py-5 px-[15px] xs:py-large xs:px-5 sm:p-large md:py-x-large xl:px-x-large bg-lynch-100 rounded-2xl xs:rounded-large">
        <h2 className="mb-space-large xl:mb-x-large">
          {faq.attributes.title}
        </h2>
        <div className={styles.list}>
          {faq.attributes.faqs.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
