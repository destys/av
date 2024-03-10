"use client";
import Image from "next/image";

import Icon from "../ui/icon/Icon";
import Button from "../ui/button/Button";

import styles from "./IntroBanner.module.scss";
import Select from "../ui/select/Select";
import useCallbackModal from "@/hooks/useCallbackModal";

export default function IntroBanner({ image, imageWidth, imageHeight }) {
  const callbackModal = useCallbackModal();

  const handleSelect = (selectedOption) => {
    console.log("Selected option:", selectedOption);
  };

  const options = [
    { label: "Audi", value: "Audi" },
    { label: "BMW", value: "BMW" },
    { label: "Volkswagen", value: "volkswagen" },
  ];

  const options_models = [
    { label: "Model 1", value: "model_1" },
    { label: "Model 2", value: "model_2" },
    { label: "Model 3", value: "model_3" },
  ];

  return (
    <section className={styles.intro}>
      <div className="container grid grid-cols-2 gap-5 sm:gap-space-large xl:flex ">
        <div className={styles.left}>
          <div className={styles.image}>
            <Image
              src={`/banner/${image}`}
              width={imageWidth > 0 ? imageWidth : undefined}
              height={imageHeight > 0 ? imageHeight : undefined}
              alt="Мобильный автосервис"
            />
          </div>
          <div className={styles.content}>
            <h1 className="mb-5">Мобильный автосервис</h1>
            <p>
              С помощью команды опытных механиков и техников, они стремятся
              прибыть на место вашего нахождения в кратчайшие сроки после
              получения звонка о помощи.
            </p>
          </div>
          <div className={styles.entry}>
            <h5 className="mb-4 sm:mb-5">Выберите марку и модель</h5>
            <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-4 max-w-[660px]">
              <Select
                options={options}
                onSelect={handleSelect}
                placeholder={"Выберите марку"}
              />
              <Select
                options={options_models}
                onSelect={handleSelect}
                placeholder={"Выберите модель"}
              />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <button className="flex md:flex-col justify-between order-2 sm:order-1 relative px-3 sm:px-large py-5 md:p-large w-full bg-sapphire md:h-[265px] rounded-2xl xs:rounded-large text-left overflow-hidden">
            <Image
              src={"/banner/join-telegram-group.png"}
              width={195}
              height={265}
              alt="join-telegram-group"
              className="hidden md:block md:absolute md:bottom-0 md:right-[-30px] md:z-10"
            />
            <h4 className="text-white tracking-little">
              Присоединяйся <br />
              как исполнитель
            </h4>
            <Icon
              name={"arrow-link"}
              color="fill-white"
              size={48}
              className={"max-w-6 md:max-w-none"}
            />
          </button>
          <div className="hidden md:flex flex-col justify-between order-1 sm:order-2 relative md:mb-5 px-3 sm:px-large py-5 md:p-large w-full bg-lynch-100 md:h-[265px] rounded-x-large sm:rounded-large text-left overflow-hidden">
            <div className="hidden md:flex md:justify-between md:items-start md:gap-2.5">
              <h4 className="tracking-little">
                Онлайн-заявка на <br /> первый ремонт
              </h4>
              <Image
                src={"/banner/discount.png"}
                width={131}
                height={71}
                alt="join-telegram-group"
                className="object-contain"
              />
            </div>
            <Button
              style={"outlined-full"}
              icon={"arrow-link"}
              onClick={callbackModal.onOpen}
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
