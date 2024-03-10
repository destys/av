"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/modals/AuthModal";
import RegistrationModal from "@/components/modals/RegistrationModal";
import CallbackModal from "@/components/modals/CallbackModal";
import SuccessModal from "@/components/modals/SuccessModal";

const revalidate = 0;

const ModalProvider = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <RegistrationModal />
      <CallbackModal />
      <SuccessModal />
    </>
  );
};

export default ModalProvider;
