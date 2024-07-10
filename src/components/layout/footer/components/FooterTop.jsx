"use client";
import Link from "next/link";
import Image from "next/image";

import Icon from "@/components/ui/icon/Icon";

import styles from "../Footer.module.scss";

export default function FooterTop() {
  return (
    <div className={styles.top}>
      <Image
        src="/footer-vector.svg"
        alt="footer-vector"
        width={110}
        height={50}
        className="hidden md:block absolute top-1/2 -left-2 w-full max-w-32 h-[300%] -translate-y-1/2"
      />
      <h3 className="hidden md:block pl-28 text-lynch-800">
        Быстро придём на помощь
      </h3>
      <Link
        href="tel:+74950002040"
        className="md:ml-auto font-semibold text-2xl lg:text-4xl text-lynch-800 tracking-tight"
      >
        +7 495 000 20 40
      </Link>
      <Link
        href={"#"}
        className="flex justify-center items-center bg-navy rounded-full py-2.5 px-2 basis-[56px]"
      >
        <Icon name="telegram" size={36} color={"fill-white"} />
      </Link>
    </div>
  );
}
