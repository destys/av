"use client";
import styles from "./Header.module.scss";

import IconButton from "@/components/ui/iconButton/IconButton";
import Button from "@/components/ui/button/Button";
import Logotype from "@/components/ui/logotype/Logotype";

import useAuthModal from "@/hooks/useAuthModal";
import useRegistrationModal from "@/hooks/useRegistrationModal";
import useCallbackModal from "@/hooks/useCallbackModal";
import Select from "@/components/ui/select/Select";
import Icon from "@/components/ui/icon/Icon";

export default function Header() {
  const authModal = useAuthModal();
  const registrationModal = useRegistrationModal();
  const callbackModal = useCallbackModal();

  const options = [
    { label: "Санкт-Петербург", value: "spb" },
    { label: "Москва", value: "msk" },
  ];

  const handleSelect = (selectedOption) => {
    console.log("Selected option:", selectedOption);
  };

  return (
    <header className={styles.header}>
      <div className="flex justify-between items-center gap-5 container">
        <div className={styles.left}>
          <Logotype className="order-2 md:order-1" />
          <div className="hidden w-fit sm:flex sm:items-center sm:gap-2 sm:order-1 md:order-2">
            <span className="hidden xl:block text-xl text-lynch-300">
              Город:
            </span>
            <div className="flex gap-3 items-center">
              <Select
                options={options}
                onSelect={handleSelect}
                selectClassNames="!p-0 !bg-transparent border-none text-lg !text-navy underline !rounded-none lg:text-xl"
                id={"city"}
              />
              <button className="order-3">
                <Icon name={"info"} size={24} color={"fill-navy"} />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <IconButton
            type={"outlined"}
            icon={"support"}
            onClick={callbackModal.onOpen}
            className="max-md:max-w-[35px] max-md:max-h-[35px] max-md:p-2"
          />
          <div className={styles.auth}>
            <Button
              className="p-0 font-normal border-none"
              onClick={registrationModal.onOpen}
            >
              Регистрация
            </Button>
            <Button
              link={"/test"}
              title={"Вход"}
              icon="login"
              style={"filled"}
              className={"flex-row-reverse gap-2.5 font-normal"}
              onClick={authModal.onOpen}
            >
              Вход
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
