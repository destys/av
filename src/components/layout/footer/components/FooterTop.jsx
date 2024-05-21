"use client";
import Link from "next/link";

import Logotype from "@/components/ui/logotype/Logotype";
import Button from "@/components/ui/button/Button";

import styles from "../Footer.module.scss";

export default function FooterTop() {
  return (
    <div className={styles.top}>
      <Logotype />
      <Link
        href={"tel:+74950002040"}
        className="hidden xl:block xl:flex-auto xl:font-semibold xl:text-[40px] xl:text-lynch-800 xl:text-right xl:whitespace-nowrap"
      >
        +7 495 000 20 40
      </Link>
      <Button
        style={"filled"}
        onClick={() => alert("Callback")}
        className={"hidden md:flex"}
      >
        Оставить заявку
      </Button>
    </div>
  );
}
