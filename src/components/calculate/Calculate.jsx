import Image from "next/image";

import Button from "../ui/button/Button";

import styles from "./Calculate.module.scss";

export default function Calculate() {
  return (
    <section className={styles.calculate}>
      <div className="relative container py-large px-5 sm:p-large md:py-x-large 2xl:p-x-large bg-sapphire rounded-2xl xs:rounded-large overflow-hidden">
        <div className={styles.content}>
          <h2>Рассчитайте стоимость работ</h2>
          <p className="my-space-large">
            Благодаря калькулятору можно узнать предварительную стоимость
            ремонта, не выходя из дома, что экономит время и упрощает процесс
            планирования бюджета.
          </p>
          <Button style={"filled"} icon={"arrow-link"} >
            Калькулятор услуг
          </Button>
        </div>
        <Image
          src={"/calculate/image.png"}
          width={780}
          height={519}
          alt="Рассчитайте стоимость работ"
          className="absolute bottom-0 right-0 w-[173px] h-[116px] sm:w-[339px] sm:h-[226px] md:w-[600px] md:h-[401px] 2xl:w-[780px] 2xl:h-[519px]"
        />
      </div>
    </section>
  );
}
