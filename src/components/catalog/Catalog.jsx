import CatalogItem from "./catalog-item/CatalogItem";

import styles from "./Catalog.module.scss";

export default function Catalog() {
  const categories = [
    {
      id: 0,
      title: "Вызов эвакуатора и манипулятора",
      subcategories: [
        { id: 0, title: "Легковой эвакуатор" },
        { id: 1, title: "Эвакуатор манипулятор" },
        { id: 2, title: "Мотоэвакуатор" },
        { id: 3, title: "Грузовой эвакуатор" },
        { id: 4, title: "Эвакуатор спецтехники" },
        { id: 5, title: "Эвакуатор внедорожников" },
        { id: 6, title: "Эвакуатор газелей" },
        { id: 7, title: "Эвакуатор микроавтобусов" },
        { id: 8, title: "Эвакуатор для автобусов" },
        { id: 9, title: "Эвакуатор квадроциклов и скутеров" },
        { id: 10, title: "Транспортировка катеров и яхт" },
        { id: 11, title: "Эвакуатор для спорткаров" },
        { id: 12, title: "Эвакуатор для грузовых машин" },
        { id: 13, title: "Эвакуатор для фур" },
      ],
      illustration: "evacuator",
    },
    {
      id: 1,
      title: "Мобильный шиномонтаж",
      subcategories: [
        { id: 0, title: "Легковой эвакуатор" },
        { id: 1, title: "Эвакуатор манипулятор" },
        { id: 2, title: "Мотоэвакуатор" },
        { id: 3, title: "Грузовой эвакуатор" },
        { id: 4, title: "Эвакуатор спецтехники" },
        { id: 5, title: "Эвакуатор внедорожников" },
        { id: 6, title: "Эвакуатор газелей" },
        { id: 7, title: "Эвакуатор микроавтобусов" },
        { id: 8, title: "Эвакуатор для автобусов" },
        { id: 9, title: "Эвакуатор квадроциклов и скутеров" },
        { id: 10, title: "Транспортировка катеров и яхт" },
        { id: 11, title: "Эвакуатор для спорткаров" },
        { id: 12, title: "Эвакуатор для грузовых машин" },
        { id: 13, title: "Эвакуатор для фур" },
      ],
      illustration: "shinomontaj",
    },
  ];
  return (
    <section className={styles.catalog}>
      <div className={`container ${styles.container}`}>
        {categories.map((item) => (
          <CatalogItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
