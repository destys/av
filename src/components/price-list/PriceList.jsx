import { replaceVariablesInText } from "@/utils/extractDataFromParams";
import styles from "./PriceList.module.scss";
import PriceListItem from "./price-list-item/PriceListItem";

export default async function PriceList({ data, params }) {
  if (!data) return null;

  // Обрабатываем заголовки прайс-листа
  const prices = await Promise.all(
    data.prices.map(async (item) => ({
      ...item,
      title: await replaceVariablesInText(item.title, params),
    }))
  );

  // Обрабатываем заголовок и описание
  const title = data?.title
    ? await replaceVariablesInText(data.title, params)
    : "";
  const description = data?.description
    ? await replaceVariablesInText(data.description, params)
    : "";

  return (
    <section className={styles.price_list}>
      <div className="container xl:p-x-large">
        <div className={styles.top}>
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </div>
        <div className={styles.list}>
          {prices.map((item) => (
            <PriceListItem key={item.id} item={item} params={params} />
          ))}
        </div>
      </div>
    </section>
  );
}
