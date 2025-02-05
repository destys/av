"use client";
import Button from "@/components/ui/button/Button";
import useCallbackModal from "@/hooks/useCallbackModal";
import useRegistrationModal from "@/hooks/useRegistrationModal";

const GetAccess = () => {
  const { onOpen } = useRegistrationModal();
  return (
    <Button
      style="filled"
      icon="login"
      className={"hidden md:flex flex-row-reverse gap-2.5 font-normal"}
      onClick={onOpen}
    >
      Получить доступ
    </Button>
  );
};

export default GetAccess;
