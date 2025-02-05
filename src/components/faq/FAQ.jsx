import { replaceVariablesInText } from "@/utils/extractDataFromParams";

import styles from "./FAQ.module.scss";
import { FAQList } from "./FAQList";

export default function FAQ({ data, params }) {
  if (!data) return null;

  return (
    <section className={styles.faq}>
      <div className="container py-5 px-[15px] xs:py-large xs:px-5 sm:p-large md:py-x-large xl:px-x-large bg-lynch-100 rounded-2xl xs:rounded-large">
        <h2 className="mb-space-large xl:mb-x-large">
          {replaceVariablesInText(data.attributes.title, params)}
        </h2>
        <FAQList data={data} />
      </div>
    </section>
  );
}
