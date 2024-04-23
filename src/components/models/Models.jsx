"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import ModelsNavigation from "./ModelsNavigation";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./Models.module.scss";
import Select from "../ui/select/Select";

export default function Models({ data, params }) {
  const path = usePathname();
  const router = useRouter();

  const modelOptions = data.map((item) => ({
    label: item.attributes.title,
    value: item.attributes.title.toLowerCase(),
    slug: item.attributes.slug,
  }));

  const handleSelect = (selectedOption) => {
    setTimeout(() => {
      router.push(`${path}_${selectedOption.slug}`);
    }, 1000);
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
            {data.map((item) => (
              <SwiperSlide key={item.id} className="p-4 bg-white rounded-large">
                <Link
                  href={`${params}_${item.attributes.slug}`}
                  className="flex flex-col items-center "
                >
                  <Image
                    src={`${process.env.API_URL}${item.attributes.image.data.attributes.formats.small.url}`}
                    width={150}
                    height={150}
                    alt={item.title}
                  />
                  <p className="font-medium text-[32px] uppercase">
                    {item.attributes.title}
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
            options={modelOptions}
            onSelect={handleSelect}
            placeholder={"Выберите модель"}
          />
        </div>
      </div>
    </section>
  );
}
