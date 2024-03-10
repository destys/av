import styles from "./PriceList.module.scss";
import PriceListItem from "./price-list-item/PriceListItem";

import { PRICELIST } from "./price-list.data";

export default function PriceList() {
  return (
    <section className={styles.price_list}>
      <div className="container  xl:p-x-large">
        <div className={styles.top}>
          <h2>Ремонт трансмиссии автомобиля</h2>
          <p>
            Полный комплекс услуг, включая диагностику, ремонт и замену
            неисправных деталей, а также очистку и обслуживание АКПП.{" "}
          </p>
        </div>
        <div className={styles.list}>
          {PRICELIST.map((item) => (
            <PriceListItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
