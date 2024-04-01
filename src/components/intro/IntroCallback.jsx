"use client";
import React from "react";
import Image from "next/image";

import Button from "../ui/button/Button";
import useCallbackModal from "@/hooks/useCallbackModal";

export default function IntroCallback() {
  const callbackModal = useCallbackModal();
  return (
    <div className="hidden md:flex flex-col justify-between order-1 sm:order-2 relative md:mb-5 px-3 sm:px-large py-5 md:p-large w-full bg-lynch-100 md:h-[265px] rounded-x-large sm:rounded-large text-left overflow-hidden">
      <div className="hidden md:flex md:justify-between md:items-start md:gap-2.5">
        <h4 className="tracking-little">
          Онлайн-заявка на <br /> первый ремонт
        </h4>
        <Image
          src={"/banner/discount.png"}
          width={131}
          height={71}
          alt="join-telegram-group"
          className="object-contain"
        />
      </div>
      <Button
        style={"outlined-full"}
        icon={"arrow-link"}
        onClick={callbackModal.onOpen}
      >
        Оставить заявку
      </Button>
    </div>
  );
}
