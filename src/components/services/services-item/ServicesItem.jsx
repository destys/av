"use client";

import Icon from "@/components/ui/icon/Icon";
import Image from "next/image";
import Link from "next/link";

import styles from "./ServicesItem.module.scss";
import { usePathname } from "next/navigation";

export default function ServicesItem({ item, type, isPage }) {
  const currentPath = usePathname();
  console.log("currentPath: ", currentPath);
  return (
    <>
      {type === "primary" && (
        <Link
          href={
            currentPath === "/"
              ? item.attributes.slug
              : `${currentPath}/${item.attributes.slug}`
          }
          className={`${styles.primary} ${isPage && styles.servicesPage}`}
        >
          {item.attributes.icon.data && (
            <Image
              src={`${process.env.API_URL}${item.attributes.icon?.data.attributes.url}`}
              width={96}
              height={96}
              alt={item.title}
              className="max-w-12 md:max-w-[82px] xl:max-w-none"
            />
          )}
          <h5 className="text-center max-md:text-xs tracking-[-0.63px] md:tracking-[-1.69px] xl:tracking-[-2.08px]">
            {item.attributes.title}
          </h5>
          <Icon name={"arrow-link"} size={36} color={"fill-navy"} />
        </Link>
      )}{" "}
      {type === "secondary" && (
        <Link
          href={
            currentPath === "/"
              ? item.attributes.slug
              : `${currentPath}/${item.attributes.slug}`
          }
          className={styles.secondary}
        >
          <h5 className="md:tracking-[-2.08px] text-sm md:text-2xl">
            {item.attributes.title}
          </h5>
          <Icon name={"arrow-link"} size={36} color={"fill-navy"} />
        </Link>
      )}
    </>
  );
}
