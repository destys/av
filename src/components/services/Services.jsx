import styles from "./Services.module.scss";
import ServicesItem from "./services-item/ServicesItem";

export default function Services({ title, description, data, isPage, params }) {
  return (
    <section className={styles.services}>
      <div className="container flex flex-col gap-2.5 xs:gap-5 sm:gap-space-large xl:gap-x-large py-5 px-4 xs:py-large sm:px-large md:py-x-large xl:p-x-large rounded-2xl xs:rounded-large bg-lynch-100">
        <div className={styles.top}>
          <h2 className="tracking-[-0.91px] md:tracking-[-3.12px] leading-none">
            {title || "Услуги"}
          </h2>
          <p>{description}</p>
        </div>
        {data?.length > 0 && (
          <div className={`${styles.list_primary}  ${isPage && styles.isPage}`}>
            {data
              .filter((item) => item.attributes.hidden !== true)
              .map((item, index) => (
                <ServicesItem
                  key={item.id}
                  item={item}
                  isPage={isPage}
                  params={params}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
