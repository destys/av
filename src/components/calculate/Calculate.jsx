import Image from "next/image";

import Button from "../ui/button/Button";

import styles from "./Calculate.module.scss";

export default function Calculate() {
  return (
    <section className={styles.calculate}>
      <div className="relative container py-large px-5 sm:p-large md:py-x-large 2xl:p-x-large bg-sapphire rounded-2xl xs:rounded-large overflow-hidden">
        <div className={styles.content}>
          <h2>Рассчитайте страховку от партнеров</h2>
          <p className="my-space-large">
            С нами вы можете легко и быстро рассчитать страховку от лучших
            партнеров. Мы предлагаем надежные условия и выгодные тарифы для
            вашего автомобиля. Доверьте свою безопасность профессионалам и
            защитите себя и свой автомобиль от непредвиденных ситуаций. Получите
            индивидуальное предложение прямо сейчас!
          </p>
          <Button style={"filled"} icon={"arrow-link"}>
            Получить предложение
          </Button>
        </div>
        <Image
          src={"/calculate/osago.png"}
          width={698}
          height={331}
          alt="Рассчитайте стоимость работ"
          className="absolute bottom-0 right-0 w-[173px] h-[116px] sm:w-[339px] sm:h-[226px] md:w-[698px] md:h-[338px]"
        />
      </div>
    </section>
  );
}
