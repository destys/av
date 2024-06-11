"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

import useAuthModal from "@/hooks/useAuthModal";
import useAuthStore from "@/hooks/useAuthStore";
import useResetModal from "@/hooks/useResetModal";

import Modal from "./Modal";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";

export default function AuthModal() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { onClose, isOpen } = useAuthModal();

  const resetModal = useResetModal();

  const { login } = useAuthStore();

  const router = useRouter();

  const onChange = (open) => {
    if (!open) {
      onClose();

      if (window.location.pathname === "/profile") {
        router.push("/");
      }
    }
  };

  const onSubmit = async (e) => {
    setMessage("");
    e.preventDefault();

    axios
      .post(`${process.env.API_URL}/api/auth/local?populate=role`, {
        identifier: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
      .then((response) => {
        setIsLoading(true);
        login(response.data.jwt);
        onChange();
        router.push("/profile");
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle error.
        console.error("An error occurred:", error.response);
        setIsLoading(false);
        setMessage(error.response.data.error.message);
      });
  };

  const handleResetPassword = () => {
    resetModal.onOpen();
    onClose();
  };

  return (
    <Modal title={"Авторизация"} isOpen={isOpen} onChange={onChange}>
      <form action="#" onSubmit={onSubmit}>
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder={"mail@example.com"}
          className="mb-4"
        />
        <Input
          name="password"
          label="Пароль"
          type="password"
          placeholder={"***************"}
          className="mb-space-large"
        />
        {message && <p className="-mt-6 mb-6 text-red-600">{message}</p>}
        <Button
          type="submit"
          style={"filled-full"}
          className="mb-5"
          disabled={isLoading}
        >
          {isLoading ? "Загрузка" : "Войти"}
        </Button>
        <Button
          style={"outlined-full"}
          type="button"
          onClick={handleResetPassword}
        >
          Восстановить пароль
        </Button>
      </form>
    </Modal>
  );
}
