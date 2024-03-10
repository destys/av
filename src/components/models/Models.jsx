"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import ModelsNavigation from "./ModelsNavigation";

import { MODELS, MODELS_options } from "./models.data.js";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./Models.module.scss";
import Select from "../ui/select/Select";

export default function Models() {
  const handleSelect = (selectedOption) => {
    console.log("Selected option:", selectedOption);
  };

  return (
    <section className={styles.models}>
      <div className="hidden sm:block container bg-sapphire py-5 xl:!py-large px-large xl:!px-x-large rounded-2xl xs:rounded-large overflow-hidden">
        <Swiper
          className="!flex flex-col-reverse"
          spaceBetween={10}
          slidesPerView={3}
          modules={[Navigation]}
          breakpoints={{
            1024: {
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <div className={styles.top}>
            <h2>Выберите модель автомобиля</h2>
            <ModelsNavigation />
          </div>
          <div className="overflow-hidden">
            {MODELS.map((item) => (
              <SwiperSlide key={item.id} className="p-4 bg-white rounded-large">
                <Link href={"/brand"} className="flex flex-col items-center ">
                  <Image
                    src={`/models/${item.image}`}
                    width={150}
                    height={150}
                    alt={item.title}
                  />
                  <p className="font-medium text-[32px] uppercase">
                    {item.title}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <div className="block sm:hidden container bg-sapphire !p-5 rounded-2xl xs:rounded-large overflow-hidden">
        <div className={styles.top}>
          <h2 className="max-sm:text-lg">Выберите модель автомобиля</h2>
        </div>
        <div className="overflow-hidden">
          <Select
            options={MODELS_options}
            onSelect={handleSelect}
            placeholder={"Выберите модель"}
          />
        </div>
      </div>
    </section>
  );
}
