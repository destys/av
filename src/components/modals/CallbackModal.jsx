import { useState } from "react";

import Modal from "./Modal";
import Button from "@/components/ui/button/Button";
import Select from "../ui/select/Select";
import Input from "../ui/input/Input";

import useSuccessModal from "@/hooks/useSuccessModal";
import useCallbackModal from "@/hooks/useCallbackModal";

export default function CallbackModal() {
  const { onClose, isOpen } = useCallbackModal();
  const [currentStep, setCurrentStep] = useState(0);
  const [serviceDescription, setServiceDescription] = useState("");
  const successModal = useSuccessModal();

  const steps = [
    {
      id: 0,
      title: "Машина",
    },
    {
      id: 1,
      title: "Проблема",
    },
    {
      id: 2,
      title: "Место",
    },
  ];

  const typeOfCar = [
    {
      id: 0,
      title: "Легковые авто",
    },
    {
      id: 1,
      title: "Лёгкие коммерческие",
    },
    {
      id: 2,
      title: "Прицепы",
    },
    {
      id: 3,
      title: "Грузовики и седельные тягачи",
    },
    {
      id: 4,
      title: "Спецтехника",
    },
  ];

  const options = [
    { label: "Audi", value: "Audi" },
    { label: "BMW", value: "BMW" },
    { label: "Volkswagen", value: "volkswagen" },
  ];

  const options2 = [
    { label: "Model 1", value: "model_1" },
    { label: "Model 2", value: "model_2" },
    { label: "Model 3", value: "model_3" },
  ];

  const options3 = [
    {
      label: "Отключить сигнализацию",
      value: "model",
      description:
        "Lorem ipsum dolor sit,  architecto eveniet earum fugit aspernatur quasi exercitationem porro iure in eaque doloribus doloremque. Sapiente eaque non laborum assumenda!",
    },
    {
      label: "Завести машину",
      value: "model22",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Sapiente eaque non laborum assumenda!",
    },
    {
      label: "Эвакуатор",
      value: "model33",
      description:
        "Vitae beatae consequuntur est, architecto eveniet earum fugit aspernatur quasi exercitationem porro iure in eaque doloribus doloremque. Sapiente eaque non laborum assumenda!",
    },
  ];

  const handleSelect = (selectedOption) => {};

  const handleSelectService = (selectedOption) => {
    setServiceDescription(selectedOption.description);
  };

  const onChange = (open) => {
    if (!open) {
      onClose();
    }
  };

  const onSubmit = (e) => {
    onClose();
    successModal.onOpen();
    e.preventDefault();
  };

  return (
    <Modal
      title={"Заявка на ремонт"}
      isOpen={isOpen}
      onChange={onChange}
      contentClassNames={"max-w-[1024px]"}
    >
      <form action="#" onSubmit={onSubmit}>
        <div className="grid grid-cols-3 gap-2.5 mb-space-large">
          {steps.map((step) => (
            <div key={step.id}>
              <p
                className={`flex items-center mb-4 h-8 text-lynch text-2xl transition-all ${
                  currentStep === step.id &&
                  "font-semibold text-3xl !text-black"
                }`}
              >
                {step.id + 1}.{step.title}
              </p>
              <div
                className={`h-2.5 rounded-x-large transition-colors ${
                  currentStep === step.id ? "bg-navy" : "bg-navy-200"
                }`}
              ></div>
            </div>
          ))}
        </div>
        {/* 1. Машина */}
        <div
          className={
            currentStep === 0 ? "grid grid-cols-2 gap-[15px]" : "hidden"
          }
        >
          <div className="mb-space-large col-span-2">
            <h5 className="mb-4 font-medium text-[32px]">Тип авто</h5>
            <div className="flex flex-wrap gap-4">
              {typeOfCar.map((type) => (
                <div key={type.id}>
                  <input
                    type="radio"
                    name="type-of-car"
                    id={`type-of-car-${type.id}`}
                    className="hidden peer"
                  />
                  <label
                    htmlFor={`type-of-car-${type.id}`}
                    className="block py-[15px] px-large rounded-x-large border border-navy cursor-pointer font-semibold text-navy text-2xl peer-checked:bg-navy-200"
                  >
                    {type.title}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2">
            <h5 className="mb-4 font-medium text-[32px]">Марка</h5>
            <Select
              options={options}
              onSelect={handleSelect}
              placeholder={"Выберите марку"}
            />
          </div>
          <div className="mb-space-large">
            <h5 className="mb-4 font-medium text-[32px]">Модель</h5>
            <Select
              options={options2}
              onSelect={handleSelect}
              placeholder={"Выберите модель"}
            />
          </div>
          <div className="mb-space-large">
            <h5 className="mb-4 font-medium text-[32px]">Год</h5>
            <Input placeholder={"Укажите год"} />
          </div>
          <div className="col-span-2">
            <Button
              type="button"
              style={"filled-full"}
              className="mb-5"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Продолжить
            </Button>
          </div>
        </div>
        {/* 2. Проблема */}
        <div className={currentStep === 1 ? "block" : "hidden"}>
          <div className=" mb-space-large">
            <h5 className="mb-4 font-medium text-[32px]">Услуга</h5>
            <Select
              options={options3}
              onSelect={handleSelectService}
              placeholder={"Выберите услугу"}
            />
            <p className="mt-2.5 pl-large text-xl text-lynch">
              {serviceDescription}
            </p>
          </div>
          <div className=" mb-space-large">
            <h5 className="mb-4 font-medium text-[32px]">Описание</h5>
            <textarea
              className="py-[15px] px-5 rounded-[15px] w-full resize-none h-[167px] text-2xl"
              placeholder="Например, не заводится, стартер не крутит"
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Button
              type="button"
              style={"outlined-full"}
              className="mb-5"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Назад
            </Button>
            <Button
              type="button"
              style={"filled-full"}
              className="mb-5"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Продолжить
            </Button>
          </div>
        </div>
        {/* 3. Место */}
        <div className={currentStep === 2 ? "block" : "hidden"}>
          <div className="mb-space-large">
            <h5 className="mb-4 font-medium text-[32px]">Ваше имя</h5>
            <Input placeholder={"Имя"} />
          </div>
          <div className="mb-space-large">
            <h5 className="mb-4 font-medium text-[32px]">Телефон</h5>
            <Input type={"tel"} placeholder={"+7 (999) 000-00-00"} />
          </div>
          <div className="mb-space-large">
            <h5 className="mb-4 font-medium text-[32px]">
              Когда нужна помощь?
            </h5>
            <div className="grid grid-cols-2 items-center gap-7">
              <Input type={"date"} placeholder={"Выберите дату"} />
              <div>
                <input
                  type="checkbox"
                  name="urgently"
                  id="urgently"
                  className="hidden peer"
                />
                <label
                  htmlFor="urgently"
                  className="pl-[44px] relative text-2xl text-sapphire before:absolute before:top-0 before:left-0 before:z-20 before:w-8 before:h-8 before:rounded-[5px] before:bg-white before:bg-container before:bg-no-repeat before:bg-center peer-checked:before:bg-[url('/check-box.svg')]"
                >
                  Срочно, в ближайшее время
                </label>
              </div>
            </div>
          </div>
          <div className="mb-space-large">
            <h5 className="mb-4 font-medium text-[32px]">Адрес или ориентир</h5>
            <Input
              placeholder={"Пример: Москва, 36-км МКАД, внешняя сторона"}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Button
              type="button"
              style={"outlined-full"}
              className="mb-5"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Назад
            </Button>
            <Button type="submit" style={"filled-full"} className="mb-5">
              Отправить
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
}
