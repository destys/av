"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import useAuthStore from "@/hooks/useAuthStore";

import ClientPage from "./components/client/ClientPage";
import PartnerPage from "./components/partner/PartnerPage";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/loader/Loader";

export default function ProfileLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const { jwtToken } = useAuthStore();
  const [user, setUser] = useState({});
  const router = useRouter();

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
      } catch (error) {
        router.push("/");
        // Можно обработать ошибку здесь или пробросить её для обработки в вызывающем коде
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(); // Вызываем функцию для выполнения запроса при монтировании компонента

    // Указываем зависимость, чтобы useEffect запускался снова при изменении jwtToken
  }, [jwtToken]);

  return (
    <>
      {isLoading && <Loader />}
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
