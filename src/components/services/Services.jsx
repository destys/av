import styles from "./Services.module.scss";
import ServicesItem from "./services-item/ServicesItem";

export default function Services({ title, data, isPage }) {
  return (
    <section className={styles.services}>
      <div className="container flex flex-col gap-2.5 xs:gap-5 sm:gap-space-large xl:gap-x-large py-5 px-4 xs:py-large sm:px-large md:py-x-large xl:p-x-large rounded-2xl xs:rounded-large bg-lynch-100">
        <div className={styles.top}>
          <h2 className="tracking-[-0.91px] md:tracking-[-3.12px] leading-none">
            {title || "Ремонт трансмиссии автомобиля"}
          </h2>
          <p>
            Наши специалисты позволяют нам предлагать полный комплекс
            профессиональных услуг по ремонту авто.{" "}
          </p>
        </div>
        {data?.length > 0 && (
          <div className={`${styles.list_primary}  ${isPage && styles.isPage}`}>
            {data.map((item, index) => (
              <ServicesItem
                key={item.id}
                item={item}
                isPage={isPage}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
