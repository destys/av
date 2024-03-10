"use client";

import { useRouter } from "next/navigation";

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
    e.preventDefault();
    onChange();
    router.push("/profile");
  };

  return (
    <Modal title={"Авторизоваться"} isOpen={isOpen} onChange={onChange}>
      <form action="#" onSubmit={onSubmit}>
        <Input
          name="phone"
          type="tel"
          label="Телефон"
          placeholder={"+7 (999) 000-00-00"}
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
