"use client";

import IconButton from "@/components/ui/iconButton/IconButton";
import Logotype from "@/components/ui/logotype/Logotype";
import CityChoice from "./components/CityChoice";
import Actions from "./components/Actions";

import styles from "./Header.module.scss";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/button/Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className="flex justify-between items-center gap-5 container">
        <div className={styles.left}>
          <Logotype className="order-2 md:order-1" />
          <CityChoice />
        </div>
        <div className={styles.right}>
          <div className="relative">
            <IconButton
              type={"outlined"}
              icon={"support"}
              onClick={() => setOpen(!open)}
              className="max-md:max-w-[35px] max-md:max-h-[35px] max-md:p-2"
            />
            <div
              className={`absolute top-full left-0 w-[355px] p-7 bg-white rounded-[10px] shadow-xl ${
                open ? "opacity-100 z-50" : "opacity-0 -z-10"
              }`}
            >
              <div className="mb-9">
                <p className="mb-2 text-[22px]">Телефон поддержки</p>
                <Link
                  href="tel:+74950002040"
                  className="font-semibold text-4xl text-lynch-800 tracking-tight"
                >
                  +7 495 000 20 40
                </Link>
              </div>
              <div className="mb-9 text-[22px]">
                <p className="mb-2">Почта для жалоб</p>
                <Link href="mailto:support@domain.ru" className="text-navy">
                  support@domain.ru
                </Link>
              </div>
              <div>
                <Link href="#">
                  <Button style="filled" icon={"telegram"}>Онлайн поддержка</Button>
                </Link>
              </div>
            </div>
          </div>
          <Actions />
        </div>
      </div>
    </header>
  );
}
