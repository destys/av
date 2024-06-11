import React from "react";
import Modal from "../Modal";

const OrderModalWrapper = ({ children, isOpen, onChange }) => {
  return (
    <Modal
      title={"Заявка №342"}
      isOpen={isOpen}
      onChange={onChange}
      contentClassNames={"md:max-w-[780px]"}
    >
      <div className="flex items-center gap-2 mb-[15px] lg:mb-5 xl:mb-space-large">
        <div className="text-sapphire">22.02.2024</div>
        <div className="py-[5px] px-[15px] bg-danger text-white rounded-x-large">
          Срочный
        </div>
      </div>
      <div className="mb-[15px] lg:mb-5 xl:mb-space-large">
        <h3 className="mb-2.5">Не заводится</h3>
        <p className="text-lynch">
          При запуске авто, мигает приборная панель. Потом гаснет, двигатель не
          издает звуков.
        </p>
      </div>
      <div className="grid gap-5 mb-[15px] lg:mb-5 xl:mb-space-large font-semibold text-lg lg:text-[25px] xl:text-3xl">
        <div className="flex items-center gap-[5px] lg:gap-5">
          <p className="text-lynch">Тип авто:</p>
          <p className="text-sapphire">Легковые авто</p>
        </div>
        <div className="flex items-center gap-[5px] lg:gap-5">
          <p className="text-lynch">Марка:</p>
          <p className="text-sapphire">Mercedes-Benz</p>
        </div>
        <div className="flex items-center gap-[5px] lg:gap-5 ">
          <p className="text-lynch">Модель и год:</p>
          <p className=" text-sapphire">Sprinter 2011</p>
        </div>
      </div>
      <div className="mb-[15px] lg:mb-5 xl:mb-space-large">
        <div className="mb-2.5 text-lynch text-sm lg:text-xl xl:text-2xl">
          Адрес или ориентир
        </div>
        <div className="font-medium text-sm lg:text-2xl xl:text-[32px]">
          Москва, 36-км МКАД, внешняя сторона, возле шаурмы Сахара
        </div>
      </div>
      {children}
    </Modal>
  );
};

export default OrderModalWrapper;
