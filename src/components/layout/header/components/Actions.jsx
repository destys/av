import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuthModal from "@/hooks/useAuthModal";
import useRegistrationModal from "@/hooks/useRegistrationModal";
import useAuthStore from "@/hooks/useAuthStore";

import IconButton from "@/components/ui/iconButton/IconButton";
import Button from "@/components/ui/button/Button";

import styles from "../Header.module.scss";

export default function Actions() {
  const authModal = useAuthModal();
  const registrationModal = useRegistrationModal();
  const { jwtToken, logout } = useAuthStore();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.API_URL}/api/users/me?populate=role`,
          {
            next: { revalidate: 10 },
            headers: {
              Authorization: `Bearer ${jwtToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных о пользователе:", error);
      }
    };

    fetchData();
  }, [jwtToken]);

  const handleLogut = () => {
    logout();
    setUser({});
  };

  return (
    <div className={styles.auth}>
      {user.id ? (
        <>
          <Link href={"/profile"} className="text-2xl ">
            {user.name}
          </Link>
          <IconButton
            onClick={handleLogut}
            icon="logout"
            type="filled"
            className="max-md:max-w-[35px] max-md:max-h-[35px] max-md:p-2"
          />
        </>
      ) : (
        <>
          <Button
            className="p-0 font-normal border-none"
            onClick={registrationModal.onOpen}
          >
            Регистрация
          </Button>
          <Button
            title={"Вход"}
            icon="login"
            style={"filled"}
            className={"flex-row-reverse gap-2.5 font-normal"}
            onClick={authModal.onOpen}
          >
            Вход
          </Button>
        </>
      )}
    </div>
  );
}
