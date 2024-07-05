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
          : `${currentPath}_${item.attributes.slug}`
      }
      className={`${styles.primary} ${isPage && styles.servicesPage}`}
    >
      <h5 className="max-md:text-xs tracking-[-0.63px] md:-tracking-[0.035px] xl:tracking-normal">
        {item.attributes.title}
      </h5>
      <div className="flex justify-between items-end w-full">
        <Icon name={"arrow-link"} size={36} color={"fill-lynch-300"} />
        <div className="w-[72px] h-[72px] basis-[72px]">
          {item.attributes.icon.data && (
            <Image
              src={`${process.env.API_URL}${item.attributes.icon?.data.attributes.url}`}
              width={72}
              height={72}
              alt={item.attributes.title}
              className="max-w-12 md:max-w-[82px] xl:max-w-none"
            />
          )}
        </div>
      </div>
    </Link>
  );
}
