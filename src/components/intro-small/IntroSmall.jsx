import Image from "next/image";

import Button from "../ui/button/Button";

import styles from "./IntroSmall.module.scss";
import { replaceVariablesInText } from "@/utils/extractDataFromParams";

export default async function IntroSmall({
  title,
  description,
  image,
  isShowAdditional,
  params,
}) {
  console.log('title: ', title);
  return (
    <section className={styles.intro}>
      <div className={"container " + styles.container}>
        <div className={styles.top}>
          <div className={styles.content}>
            <h1 className="mb-5">{replaceVariablesInText(title, params)}</h1>
            <p className=" text-lynch-700 text-sm md:text-xl xl:md:text-2xl">
              {replaceVariablesInText(description, params)}
            </p>
          </div>
          {image !== "undefined" && (
            <div className={styles.image}>
              <Image
                src={process.env.API_URL + image}
                width={536}
                height={300}
                alt={title}
                className="hidden md:block object-contain max-w-[500px]"
              />
            </div>
          )}
        </div>
        {isShowAdditional && (
          <>
            <div className="col-span-2 md:col-span-1 min-h-[145px] relative p-5 xs:px-large md:p-large bg-sapphire rounded-2xl xs:rounded-large overflow-hidden">
              <div className="relative flex items-center justify-between gap-2 text-white z-20">
                <h3>Средняя цена ремонта</h3>
                <p className="font-medium text-lg sm:text-2xl 2xl:text-4xl whitespace-nowrap">
                  от 13 000 ₽
                </p>
              </div>
              <Image
                src={"/banner/range.png"}
                fill
                alt="graphic"
                className="z-10 !top-12 md:!top-20 object-contain"
              />
            </div>
            <div className="hidden md:flex flex-col justify-between relative p-large w-full bg-lynch-100 h-[265px] rounded-large text-left overflow-hidden">
              <div className="flex justify-between items-start gap-2.5">
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
              <Button style={"outlined-full"} icon={"arrow-link"}>
                Оставить заявку
              </Button>
            </div>
          </>
        )}
      </div>
      <div className="container"></div>
    </section>
  );
}
