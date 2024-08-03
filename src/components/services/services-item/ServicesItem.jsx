"use client";

import Icon from "@/components/ui/icon/Icon";
import Image from "next/image";
import Link from "next/link";

import styles from "./ServicesItem.module.scss";
import { usePathname } from "next/navigation";

export default function ServicesItem({ params, item, isPage }) {
  const currentPath = usePathname();
  return (
    <Link
      href={
        currentPath === "/"
          ? item.attributes.slug
          : params?.services === "catalog"
          ? `/${item.attributes.slug}/${params.car}`
          : params?.services
          ? `/${params.services}_${item.attributes.slug}/${params.car}`
          : `${currentPath}_${item.attributes.slug}`
      }
      className={`${styles.primary} ${isPage && styles.servicesPage}`}
    >
      <h5 className="max-md:text-xs tracking-[-0.63px] md:-tracking-[0.035px] xl:tracking-normal">
        {item.attributes.title}
      </h5>
      <div className="flex justify-between items-end w-full">
        <Icon
          name={"arrow-link"}
          size={36}
          color={"fill-lynch-300"}
          className="max-md:max-w-7 max-md:max-h-7"
        />
        <div className="flex justify-end items-end w-12 h-12 basis-[48px] md:w-[72px] md:h-[72px] md:basis-[72px]">
          {item.attributes.icon.data && (
            <Image
              src={`${process.env.API_URL}${item.attributes.icon?.data.attributes.url}`}
              width={72}
              height={72}
              alt={item.attributes.title}
              className="max-w-12 md:max-w-[72px] xl:max-w-none"
            />
          )}
        </div>
      </div>
    </Link>
  );
}
