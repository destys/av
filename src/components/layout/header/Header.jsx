"use client";

import useCallbackModal from "@/hooks/useCallbackModal";
import useAuthStore from "@/hooks/useAuthStore";

import IconButton from "@/components/ui/iconButton/IconButton";
import Logotype from "@/components/ui/logotype/Logotype";
import CityChoice from "./components/CityChoice";
import Actions from "./components/Actions";

import styles from "./Header.module.scss";

export default function Header() {
  const callbackModal = useCallbackModal();

  return (
    <header className={styles.header}>
      <div className="flex justify-between items-center gap-5 container">
        <div className={styles.left}>
          <Logotype className="order-2 md:order-1" />
          <CityChoice />
        </div>
        <div className={styles.right}>
          <IconButton
            type={"outlined"}
            icon={"support"}
            onClick={callbackModal.onOpen}
            className="max-md:max-w-[35px] max-md:max-h-[35px] max-md:p-2"
          />
          <Actions />
        </div>
      </div>
    </header>
  );
}
