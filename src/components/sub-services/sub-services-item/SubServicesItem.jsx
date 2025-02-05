"use client";

import Icon from "@/components/ui/icon/Icon";
import Image from "next/image";
import Link from "next/link";

import styles from "./SubServicesItem.module.scss";
import { usePathname } from "next/navigation";

export default function SubServicesItem({ params, item, isPage }) {
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
      className={styles.item}
    >
      <h5 className="max-md:text-xs tracking-[-0.63px] md:-tracking-[0.035px] xl:tracking-normal">
        {item.attributes.title}
      </h5>
      <Icon
        name={"arrow-link"}
        size={36}
        color={"fill-lynch-300"}
        className="max-md:max-w-7 max-md:max-h-7"
      />
    </Link>
  );
}
