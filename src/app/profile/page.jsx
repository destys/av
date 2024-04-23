"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import useAuthStore from "@/hooks/useAuthStore";

import ClientPage from "./components/client/ClientPage";
import PartnerPage from "./components/partner/PartnerPage";

export default function ProfileLayout() {
  const { jwtToken } = useAuthStore();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.API_URL}/api/users/me?populate=role`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        setUser(response.data);
        console.log('response.data: ', response.data);
      } catch (error) {
        console.error("Ошибка при получении данных о пользователе:", error);
        // Можно обработать ошибку здесь или пробросить её для обработки в вызывающем коде
      }
    };

    fetchData(); // Вызываем функцию для выполнения запроса при монтировании компонента

    // Указываем зависимость, чтобы useEffect запускался снова при изменении jwtToken
  }, [jwtToken]);

  return (
    <>
      {user.role?.type === "client" ? (
        <ClientPage user={user} />
      ) : user.role?.type === "partner" ? (
        <PartnerPage user={user} />
      ) : (
        ""
      )}
    </>
  );
}
