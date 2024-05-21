"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Modal from "./Modal";

import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";

import useRegistrationModal from "@/hooks/useRegistrationModal";
import useAuthStore from "@/hooks/useAuthStore";
import {
  BeatLoader,
  HashLoader,
  MoonLoader,
  RotateLoader,
} from "react-spinners";

export default function RegistrationModal() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { onClose, isOpen } = useRegistrationModal();
  const router = useRouter();
  const { login } = useAuthStore();

  const onChange = (open) => {
    if (!open) {
      onClose();
    }
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.currentTarget);

    if (formData.get("password") !== formData.get("confirm_password")) {
      setError("Введенные пароли не совпадают");
      return;
    }

    setIsLoading(!isLoading);

    const data = {
      username: formData.get("email").replace("@", "_"),
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    axios
      .post(
        `${process.env.API_URL}/api/auth/local/register?populate=role`,
        data
      )
      .then((response) => {
        login(response.data.jwt);

        // Установка роли
        axios
          .put(
            `${process.env.API_URL}/api/users/${response.data.user.id}`,
            {
              role: formData.get("typeOfСlient").trim(),
            },
            {
              headers: {
                Authorization: `Bearer ${process.env.API_TOKEN}`,
              },
            }
          )
          .then((response) => {
            onChange();
            router.push("/profile");
          });
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        setError(error.response.data.error.message);
        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Modal
      title={"Регистрация"}
      isOpen={isOpen}
      onChange={onChange}
      contentClassNames={"md:max-w-[680px]"}
    >
      <form action="#" onSubmit={handleRegistration}>
        <div className="grid grid-cols-2 gap-4 mb-space-large py-2.5 px-4 rounded-x-large bg-white">
          <div className="flex items-center justify-center">
            <input
              type="radio"
              id="client"
              name="typeOfСlient"
              className="hidden peer"
              value="3"
              defaultChecked
            />
            <label
              htmlFor="client"
              className="block p-3 w-full h-full font-medium text-3xl text-center rounded-x-large transition-colors peer-checked:bg-navy peer-checked:text-white"
            >
              Клиент
            </label>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="radio"
              id="partner"
              name="typeOfСlient"
              className="hidden peer"
              value="4"
            />
            <label
              htmlFor="partner"
              className="block p-3 w-full h-full font-medium text-3xl text-center rounded-x-large transition-colors peer-checked:bg-navy peer-checked:text-white"
            >
              Партнер
            </label>
          </div>
        </div>
        <Input
          type="text"
          name="name"
          label="Ваше имя"
          placeholder={"Имя"}
          className="mb-4"
          required
        />
        <Input
          type="email"
          label="Email"
          name="email"
          placeholder={"example@mail.com"}
          className="mb-4"
          required
        />
        <Input
          label="Пароль"
          type="password"
          name="password"
          placeholder={"***************"}
          className="mb-4"
        />
        <Input
          label="Повторите пароль"
          type="password"
          name="confirm_password"
          placeholder={"***************"}
          className="mb-space-large"
        />
        {error && (
          <p className="-mt-6 mb-4 px-large py-medium rounded-x-large border border-red-800 bg-red-100 text-red-600">
            {error}
          </p>
        )}
        <Button type="submit" style={"outlined-full"}>
          {isLoading ? (
            <MoonLoader size={25} color="#007AEA" />
          ) : (
            "Зарегистрироваться"
          )}
        </Button>
      </form>
    </Modal>
  );
}
