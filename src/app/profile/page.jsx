"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import useAuthStore from "@/hooks/useAuthStore";

import ClientPage from "./components/client/ClientPage";
import PartnerPage from "./components/partner/PartnerPage";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/loader/Loader";
import useAuthModal from "@/hooks/useAuthModal";

export default function ProfileLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const { jwtToken } = useAuthStore();
  const [user, setUser] = useState({});
  const router = useRouter();
  const { onOpen } = useAuthModal();

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
        onOpen();
      } finally {
        setIsLoading(false);
      }
    };

    if (jwtToken !== null) {
      fetchData();
    } else {
      onOpen();
    }
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
