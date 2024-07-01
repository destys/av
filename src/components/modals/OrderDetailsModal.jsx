import useOrderDetailsModal from "@/hooks/useOrderDetailsModal";
import { useState } from "react";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import OrderModalWrapper from "./components/OrderModalWrapper";
import useOrderProcessedModal from "@/hooks/useOrderProcessedModal";

const OrderDetailsModal = () => {
  const [showCustomPrice, setShowCustomPrice] = useState(true);
  const { onClose, isOpen } = useOrderDetailsModal();
  const { onOpen } = useOrderProcessedModal();

  const onChange = (open) => {
    if (!open) {
      onClose();
    }
  };
  const handleApllyButton = () => {
    onClose();
    onOpen();
  };
  

  return (
    <OrderModalWrapper isOpen={isOpen} onChange={onChange}>
      <div className="mb-[15px] lg:mb-5 xl:mb-space-large">
        <div className="mb-4">
          <input
            type="checkbox"
            name="urgently"
            id="urgently"
            className="hidden peer"
            onChange={() => setShowCustomPrice(!showCustomPrice)}
            checked={showCustomPrice}
          />
          <label
            htmlFor="urgently"
            className="cursor-pointer pl-[44px] relative text-sm lg:text-xl xl:text-2xl text-sapphire before:absolute before:top-[50%] before:left-0 before:-translate-y-1/2 before:z-20 before:w-8 before:h-8 before:rounded-[5px] before:bg-white before:bg-container before:bg-no-repeat before:bg-center peer-checked:before:bg-[url('/check-box.svg')]"
          >
            Предложить свою цену
          </label>
        </div>
        {showCustomPrice && (
          <div>
            <Input placeholder={"Введите значение в рублях"} />
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Button style={"outlined"} onClick={onClose}>
          Отказаться
        </Button>
        <Button
          style={"filled"}
          className="bg-harlequin-600 border-success hover:bg-success"
          onClick={handleApllyButton}
        >
          Принять
        </Button>
      </div>
    </OrderModalWrapper>
  );
};

export default OrderDetailsModal;
