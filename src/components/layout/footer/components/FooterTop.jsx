"use client";
import Link from "next/link";

import Logotype from "@/components/ui/logotype/Logotype";
import Button from "@/components/ui/button/Button";

import styles from "../Footer.module.scss";
import useCallbackModal from "@/hooks/useCallbackModal";

export default function FooterTop() {
  const { onOpen } = useCallbackModal();
  return (
    <div className={styles.top}>
      <Logotype />
      <Link
        href={"tel:+74950002040"}
        className="hidden xl:block xl:flex-auto xl:font-semibold xl:text-[40px] xl:text-lynch-800 xl:text-right xl:whitespace-nowrap"
      >
        +7 495 000 20 40
      </Link>
      <Button style={"filled"} className={"hidden md:flex"} onClick={onOpen}>
        Оставить заявку
      </Button>
    </div>
  );
}
