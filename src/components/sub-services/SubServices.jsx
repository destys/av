"use client";

import { useState, useEffect } from "react";
import styles from "./SubServices.module.scss";
import SubServicesItem from "./sub-services-item/SubServicesItem";
import Button from "../ui/button/Button";

export default function SubServices({ title, description, data, isPage, params }) {
  const [visibleItems, setVisibleItems] = useState(10); // По умолчанию показываем 10 (для больших экранов)
  const [showAll, setShowAll] = useState(false);

  // Функция для расчета количества видимых элементов
  const calculateVisibleItems = () => {
    const width = window.innerWidth;
    if (width <= 480) {
      setVisibleItems(6);
    } else if (width <= 1440) {
      setVisibleItems(8);
    } else {
      setVisibleItems(12);
    }
  };

  // Вызываем функцию расчета при загрузке и изменении размера окна
  useEffect(() => {
    calculateVisibleItems();
    window.addEventListener("resize", calculateVisibleItems);
    return () => window.removeEventListener("resize", calculateVisibleItems);
  }, []);

  return (
    <section className={styles.services}>
      <div className="container flex flex-col gap-2.5 xs:gap-5 sm:gap-space-large xl:gap-x-large py-5 px-4 xs:py-large sm:px-large md:py-x-large xl:p-x-large rounded-2xl xs:rounded-large bg-lynch-100">
        {/* <div className={styles.top}>
          <h2 className="tracking-[-0.91px] md:tracking-[-3.12px] leading-none">
            {title || "Услуги"}
          </h2>
          <p>{description}</p>
        </div> */}
        {data?.length > 0 && (
          <div className={styles.list}>
            {data
              .filter((item) => item.attributes.hidden !== true)
              .slice(0, showAll ? data.length : visibleItems) // Показываем ограниченное количество или все
              .map((item) => (
                <SubServicesItem
                  key={item.id}
                  item={item}
                  isPage={isPage}
                  params={params}
                />
              ))}
          </div>
        )}
        {data?.length > visibleItems && !showAll && (
          <Button
            style="outlined-full"
            onClick={() => setShowAll(true)}
            icon="arrow-down"
          >
            Развернуть список
          </Button>
        )}
      </div>
    </section>
  );
}
