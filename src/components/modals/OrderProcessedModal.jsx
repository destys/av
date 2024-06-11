import { useState } from "react";
import Button from "../ui/button/Button";
import useOrderProcessedModal from "@/hooks/useOrderProcessedModal";
import OrderModalWrapper from "./components/OrderModalWrapper";
import Image from "next/image";
import Link from "next/link";
import Icon from "../ui/icon/Icon";

const OrderProcessedModal = () => {
  const [showCustomPrice, setShowCustomPrice] = useState(true);

  const { onClose, isOpen } = useOrderProcessedModal();
  const onChange = (open) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <OrderModalWrapper isOpen={isOpen} onChange={onChange}>
      <div className="flex items-center gap-5 mb-[15px] lg:mb-5 xl:mb-space-large px-[5px] py2.5 px-[15px] xs:p-[15px] lg:py-5 xl:py-large xl:px-5 bg-white rounded-large">
        <div className="w-full h-full shrink-0 max-w-[64px] max-h-[64px] xs:max-w-[80px] xs:max-h-[80px] lg:max-w-24 lg:max-h-24">
          <Image
            src="/avatar2.png"
            width={122}
            height={122}
            alt="avatar"
            className=" w-full h-full"
          />
        </div>
        <div>
          <h3 className="mb-2.5">Мария</h3>
          <Link
            href="tel:+7 999 203 2999"
            className="flex items-center gap-5 text-lynch hover:text-sapphire"
          >
            <h3 className="text-nowrap">+7 999 203 2999</h3>
            <div className="flex justify-center items-center w-12 h-12 shrink-0 border border-navy rounded-full">
              <Icon name="phone" size={36} color="fill-navy" />
            </div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Button style={"outlined"} onClick={onClose}>
          Отказаться
        </Button>
        <Button
          style={"filled"}
          className="bg-harlequin-600 border-success hover:bg-success"
          onClick={onClose}
        >
          Завершить
        </Button>
      </div>
    </OrderModalWrapper>
  );
};

export default OrderProcessedModal;
