import styles from "./PriceList.module.scss";
import PriceListItem from "./price-list-item/PriceListItem";

import { PRICELIST } from "./price-list.data";

export default function PriceList({ data }) {
  
  return (
    <section className={styles.price_list}>
      <div className="container  xl:p-x-large">
        <div className={styles.top}>
          <h2>{data.title}</h2>
          <p>
            {data.description}
          </p>
        </div>
        <div className={styles.list}>
          {data.prices.map((item) => (
            <PriceListItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
