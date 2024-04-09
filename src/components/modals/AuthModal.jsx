"use client";

import { useRouter } from "next/navigation";

import axios from "axios";

import Modal from "./Modal";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";

import useAuthModal from "@/hooks/useAuthModal";

export default function AuthModal() {
  const { onClose, isOpen } = useAuthModal();
  const router = useRouter();

  const onChange = (open) => {
    if (!open) {
      onClose();
    }
  };

  const onSubmit = (e) => {
    console.log("e: ", e.target);
    e.preventDefault();

    axios
      .post(`${process.env.API_URL}/api/auth/local`, {
        identifier: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        localStorage.setItem('jwtToken', response.data.jwt);

        onChange();
        router.push("/profile");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
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
        <Button type="submit" style={"filled-full"} className="mb-5">
          Войти
        </Button>
        <Button style={"outlined-full"}>Восстановить пароль</Button>
      </form>
    </Modal>
  );
}
