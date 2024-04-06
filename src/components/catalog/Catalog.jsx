import getData from "@/actions/GetData";
import CatalogItem from "./catalog-item/CatalogItem";

import styles from "./Catalog.module.scss";

export default async function Catalog() {
  const data = await getData("services-main?populate=deep");
  return (
    <section className={styles.catalog}>
      <div className={`container ${styles.container}`}>
        {data.map((item) => (
          <CatalogItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
