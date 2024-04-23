"use client";

import { useRouter } from "next/navigation";

import axios from "axios";

import Modal from "./Modal";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";

import useAuthModal from "@/hooks/useAuthModal";
import useAuthStore from "@/hooks/useAuthStore";
import { useState } from "react";

export default function AuthModal() {
  const [isLoading, setIsLoading] = useState(false);
  const { onClose, isOpen } = useAuthModal();
  const { login } = useAuthStore();

  const router = useRouter();

  const onChange = (open) => {
    if (!open) {
      onClose();
    }
  };

  const onSubmit = async (e) => {
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
      });
  };

  return (
    <Modal title={"Авторизоваться"} isOpen={isOpen} onChange={onChange}>
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
        <Button
          type="submit"
          style={"filled-full"}
          className="mb-5"
          disabled={isLoading}
        >
          {isLoading ? "Загрузка" : "Войти"}
        </Button>
        <Button style={"outlined-full"}>Восстановить пароль</Button>
      </form>
    </Modal>
  );
}
