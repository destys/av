"use client";

import { useRouter } from "next/navigation";

import Modal from "./Modal";

import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";

import useRegistrationModal from "@/hooks/useRegistrationModal";

export default function RegistrationModal() {
  const { onClose, isOpen } = useRegistrationModal();
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
    <Modal
      title={"Регистрация"}
      isOpen={isOpen}
      onChange={onChange}
      contentClassNames={"md:max-w-[680px]"}
    >
      <form action="#" onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-space-large py-2.5 px-4 rounded-x-large bg-white">
          <div className="flex items-center justify-center">
            <input
              type="radio"
              id="client"
              name="type-of-client"
              className="hidden peer"
              defaultChecked
            />
            <label
              htmlFor="client"
              className="block p-6 w-full h-full font-medium text-3xl text-center rounded-x-large transition-colors peer-checked:bg-navy peer-checked:text-white"
            >
              Клиент
            </label>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="radio"
              id="partner"
              name="type-of-client"
              className="hidden peer"
            />
            <label
              htmlFor="partner"
              className="block p-6 w-full h-full font-medium text-3xl text-center rounded-x-large transition-colors peer-checked:bg-navy peer-checked:text-white"
            >
              Партнер
            </label>
          </div>
        </div>
        <Input
          type="text"
          label="Ваше имя"
          placeholder={"Имя"}
          className="mb-4"
        />
        <Input
          type="tel"
          label="Телефон"
          placeholder={"+7 (999) 000-00-00"}
          className="mb-4"
        />
        <Input
          label="Пароль"
          type="password"
          placeholder={"***************"}
          className="mb-space-large"
        />
        <Input
          label="Повторите пароль"
          type="password"
          placeholder={"***************"}
          className="mb-space-large"
        />
        <Button type="submit" style={"outlined-full"}>
          Зарегистрироваться
        </Button>
      </form>
    </Modal>
  );
}
