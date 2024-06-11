"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/modals/AuthModal";
import RegistrationModal from "@/components/modals/RegistrationModal";
import CallbackModal from "@/components/modals/CallbackModal";
import SuccessModal from "@/components/modals/SuccessModal";
import ResetModal from "@/components/modals/ResetModal";
import OrderDetailsModal from "@/components/modals/OrderDetailsModal";
import OrderProcessedModal from "@/components/modals/OrderProcessedModal";

const revalidate = 0;

const ModalProvider = () => {
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
      <ResetModal />
      <OrderDetailsModal />
      <OrderProcessedModal />
    </>
  );
};

export default ModalProvider;
