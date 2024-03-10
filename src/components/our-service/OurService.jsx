import Button from "../ui/button/Button";
import styles from "./OurService.module.scss";
import OurServiceItem from "./our-service-item/OurServiceItem";

import { data } from "./our-service.data";

export default function OurService() {
  return (
    <section className={styles.ourService}>
      <div className="container py-[15px] sm:p-5 md:py-x-large md:px-large xl:p-large 2xl:p-x-large">
        <div className={styles.top}>
          <h2>Как устроен работает наш сервис?</h2>
          <Button style={"filled"} icon={"telegram"} className={'hidden md:flex'}>
            Подписаться в телеграмм
          </Button>
        </div>
        <div className={styles.list}>
          {data.map((item) => (
            <OurServiceItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
