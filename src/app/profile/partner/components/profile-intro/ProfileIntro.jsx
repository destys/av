"use client";

import Image from "next/image";
import copy from "clipboard-copy";
import toast from "react-hot-toast";

import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icon/Icon";

import styles from "./ProfileIntro.module.scss";

export default function ProfileIntro({ name, phone }) {
  const handleButtonClick = () => {
    const element = document.getElementById("refLink"); // Замените 'yourElementId' на реальный ID вашего элемента

    if (element) {
      const textToCopy = element.textContent || element.innerText;

      copy(textToCopy)
        .then(() => toast.success("Ссылка скопирована!"))
        .catch(() => toast.error("Не удалось скопировать ссылку."));
    } else {
      toast.error("Элемент не найден!");
    }
  };

  return (
    <section className={styles.profile_intro}>
      <div className={styles.info}>
        <div className="mb-5 lg:mb-space-large">
          <Image
            src={"/avatar.png"}
            width={122}
            height={122}
            alt={`avatar ${name}`}
            className="rounded-full max-lg:max-w-24 max-sm:max-w-20 aspect-square"
          />
        </div>
        <h1 className="mb-5 lg:mb-space-large">
          Добро пожаловать, {name || "Незнакомец"}!
        </h1>
        <p className="flex items-center gap-4  text-lynch">
          <span className="text-sm md:text-xl xl:text-2xl">Ваш телефон:</span>{" "}
          <strong className="text-lg md:text-xl xl:text-3xl">
            {phone || "Не указан"}
          </strong>
        </p>
      </div>
      <div className={styles.balance}>
        <div className="mb-3 sm:mb-0 text-base md:text-[26px] xl:text-3xl">
          <p className="">Выполненно заказов</p>
          <p className="py-2 px-4 bg-navy rounded-full">4</p>
        </div>
        <div className="mb-3 sm:mb-0">
          <div
            className="flex items-center gap-2.5py-1 px-2.5 rounded-large bg-lynch cursor-pointer transition-colors hover:bg-lynch-700"
            onClick={handleButtonClick}
          >
            <Icon name="copy" size={24} color={"fill-white"} />
            <p id="refLink">автопомощь.рф/?=id230552&ref-bonus</p>
          </div>
          <div className="py-1 px-2.5 rounded-x-large bg-lynch">13</div>
        </div>
        <div className="mb-3 sm:mb-0 font-meduim text-2xl md:text-4xl xl:text-5xl">
          <p>Ваш баланс</p>
          <p>17 500 ₽</p>
        </div>
        <div className={styles.buttons}>
          <Button
            style={"filled"}
            icon={"history"}
            className="bg-transparent border-white"
            iconClassName={"max-xs:max-w-6 max-xs:max-h-6"}
          >
            История
          </Button>
          <Button
            style={"filled-full"}
            icon={"arrow-link"}
            iconClassName={"max-xs:max-w-6 max-xs:max-h-6"}
          >
            Вывести деньги
          </Button>
        </div>
      </div>
    </section>
  );
}
