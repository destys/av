import styles from "./Services.module.scss";
import ServicesItem from "./services-item/ServicesItem";

export default function Services({ title, data, isPage }) {
  //const gridRef = useRef(null); // Создаем ref для доступа к элементу

/*   const [primaryItems, setPrimaryItems] = useState([]);
  const [secondaryItems, setSecondaryItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(0); */

/*   useEffect(() => {
    // Получаем реальное количество элементов в строке сетки
    const gridElement = gridRef.current;
    if (gridElement) {
      const computedStyles = window.getComputedStyle(gridElement);
      const gridColumnCount = parseInt(
        computedStyles.getPropertyValue("grid-template-columns").split(" ")
          .length,
        10
      );

      // Рассчитываем начальное значение visibleItems
      const initialVisibleItems = gridColumnCount * 2;
      setVisibleItems(initialVisibleItems);
    }
  }, [secondaryItems]); */

/*   useEffect(() => {
    setPrimaryItems(data?.primary?.data);
    setSecondaryItems(data?.secondary?.data);
  }, [data]); */

  const handleExpandClick = () => {
    // При нажатии на кнопку увеличиваем количество видимых элементов
    setVisibleItems(secondaryItems.length);
  };

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
                type={item.attributes.icon.data ? "primary" : "secondary"}
                isPage={isPage}
              />
            ))}
          </div>
        )}
        {/* {secondaryItems.length > 0 && (
          <div className={styles.list_secondary} ref={gridRef}>
            {secondaryItems.slice(0, visibleItems).map((item, index) => (
              <ServicesItem key={item.id} item={item} type="secondary" />
            ))}
          </div>
        )} */}
        {/* {visibleItems < secondaryItems.length && (
          <Button
            style={"outlined-full"}
            icon={"arrow-down"}
            onClick={handleExpandClick}
          >
            Развернуть список
          </Button>
        )} */}
      </div>
    </section>
  );
}
