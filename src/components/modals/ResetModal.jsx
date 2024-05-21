"use client";

import { useRouter } from "next/navigation";

import axios from "axios";

import Modal from "./Modal";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";

import useAuthStore from "@/hooks/useAuthStore";
import { useState } from "react";
import useResetModal from "@/hooks/useResetModal";

export default function ResetModal() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { onClose, isOpen } = useResetModal();

  const onChange = (open) => {
    if (!open) {
      onClose();
    }
  };

  const onSubmit = async (e) => {
    setMessage("");
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(`${process.env.API_URL}/api/auth/forgot-password`, {
        email: e.target.elements.email.value,
      })
      .then((response) => {
        console.log("response: ", response);
        onChange();
      })
      .catch((error) => {
        // Handle error.
        console.error("An error occurred:", error.response);
        setMessage(error.response.data.error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Modal title={"Восстановить пароль"} isOpen={isOpen} onChange={onChange}>
      <form action="#" onSubmit={onSubmit}>
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder={"mail@example.com"}
          className="mb-4"
        />
        {message && <p className="-mt-6 mb-6 text-red-600">{message}</p>}
        <Button
          type="submit"
          style={"filled-full"}
          className="mb-5"
          disabled={isLoading}
        >
          {isLoading ? "Загрузка" : "Восстановить пароль"}
        </Button>
      </form>
    </Modal>
  );
}
