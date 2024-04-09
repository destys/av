import Button from "@/components/ui/button/Button";
import Link from "next/link";

import styles from "./ProfileIntro.module.scss";

export default function ProfileIntro({ name, phone }) {
  return (
    <section className={styles.profile_intro}>
      <div className={styles.info}>
        <h1>Добро пожаловать, {name || "Незнакомец"}!</h1>
        <p className="flex items-center gap-4  text-lynch">
          <span className="text-sm md:text-xl xl:text-2xl">Ваш телефон:</span>{" "}
          <strong className="text-lg md:text-xl xl:text-3xl">
            {phone || "Не указан"}
          </strong>
        </p>
        <p className="flex items-center gap-2 text-lynch text-sm md:text-xl xl:text-2xl">
          <span className="">Оказываемые услуги</span>
          <span className="bg-navy-200 py-2 px-4 rounded-full text-navy">
            17
          </span>
          <Link
            href="#"
            className="md:text-xl lg:text-xl text-navy hover:underline"
          >
            Изменить
          </Link>
        </p>
      </div>
      <div className={styles.balance}>
        <div className="text-base md:text-[26px] xl:text-3xl">
          <p className="">Выполненно заказов</p>
          <p className="py-2 px-4 bg-navy rounded-full">4</p>
        </div>
        <div className="font-meduim text-2xl md:text-4xl xl:text-5xl">
          <p>Ваш баланс</p>
          <p>17 500 ₽</p>
        </div>
        <Button style={"filled-full"} icon={"arrow-link"}>
          Вывести деньги
        </Button>
      </div>
    </section>
  );
}
