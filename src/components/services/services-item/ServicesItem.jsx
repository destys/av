import Icon from "@/components/ui/icon/Icon";
import Image from "next/image";
import Link from "next/link";

import styles from "./ServicesItem.module.scss";

export default function ServicesItem({ item, type, isPage }) {
  return (
    <>
      {type === "primary" && (
        <Link
          href="/services"
          className={`${styles.primary} ${isPage && styles.servicesPage}`}
        >
          <Image
            src={`/illustrations/${item.icon}.svg`}
            width={96}
            height={96}
            alt={item.title}
            className="max-w-12 md:max-w-[82px] xl:max-w-none"
          />
          <h5 className="text-center max-md:text-xs tracking-[-0.63px] md:tracking-[-1.69px] xl:tracking-[-2.08px]">
            {item.title}
          </h5>
          <Icon name={"arrow-link"} size={36} color={"fill-navy"} />
        </Link>
      )}{" "}
      {type === "secondary" && (
        <Link href="/services" className={styles.secondary}>
          <h5 className="md:tracking-[-2.08px] text-sm md:text-2xl">
            {item.title}
          </h5>
          <Icon name={"arrow-link"} size={36} color={"fill-navy"} />
        </Link>
      )}
    </>
  );
}
