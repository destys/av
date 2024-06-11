"use client";

import { useEffect, useState } from "react";

import getPage from "@/actions/GetPage";
import getData from "@/actions/GetData";

import useSuccessModal from "@/hooks/useSuccessModal";
import useCallbackModal from "@/hooks/useCallbackModal";

import Select from "@/components/ui/select/Select";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";

import Modal from "./Modal";
import EntryModel from "../intro/EntryModel";

export default function CallbackModal() {
  const [brands, setBrands] = useState([]);
  const [services, setServices] = useState(null);

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
      label: "Легковые авто",
      value: "Легковые авто",
    },
    {
      id: 1,
      title: "Лёгкие коммерческие",
      label: "Лёгкие коммерческие",
      value: "Лёгкие коммерческие",
    },
    {
      id: 2,
      title: "Прицепы",
      label: "Прицепы",
      value: "Прицепы",
    },
    {
      id: 3,
      title: "Грузовики и седельные тягачи",
      label: "Грузовики и седельные тягачи",
      value: "Грузовики и седельные тягачи",
    },
    {
      id: 4,
      title: "Спецтехника",
      label: "Спецтехника",
      value: "Спецтехника",
    },
  ];

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPage("car-brands");

        setBrands(response);
      } catch (error) {
        console.error("error: ", error);
        // Можно обработать ошибку здесь или пробросить её для обработки в вызывающем коде
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData(
          "services-main?pagination[pageSize]=2000"
        );

        const options = response.map((service) => {
          const { title, intro, slug } = service.attributes;
          return {
            label: title,
            value: slug,
            description: intro ? intro.description : "",
          };
        });

        setServices(options);
      } catch (error) {
        console.error("error: ", error);
        // Можно обработать ошибку здесь или пробросить её для обработки в вызывающем коде
      }
    };

    fetchData();
  }, []);

  return (
    <Modal
      title={"Заявка на ремонт"}
      isOpen={isOpen}
      onChange={onChange}
      contentClassNames={"max-w-[1024px]"}
    >
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-3 gap-2.5 mb-space-large">
          {steps.map((step) => (
            <div key={step.id}>
              <p
                className={`hidden xs:flex items-center lg:mb-4 h-8 text-lynch font-semibold xs:text-sm lg:text-xl xl:text-3xl transition-all ${
                  currentStep === step.id && " !text-black"
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
        <div className={currentStep === 0 ? "grid lg:gap-[15px]" : "hidden"}>
          <div className="mb-[15px] lg:mb-space-large">
            <h5 className="mb-4 font-medium">Тип авто</h5>
            <div className="hidden lg:flex flex-wrap gap-4">
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
            <div className="lg:hidden">
              <Select
                options={typeOfCar}
                onSelect={() => {}}
                placeholder={"Выберите марку"}
              />
            </div>
          </div>
          <div>
            <EntryModel brands={brands} hideLink={true} showYear={true} />
          </div>
          <div>
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
            <h5 className="mb-4 font-medium">Услуга</h5>
            <Select
              options={services}
              onSelect={handleSelectService}
              placeholder={"Выберите услугу"}
            />
            <p className="mt-2.5 pl-large text-xl text-lynch">
              {serviceDescription}
            </p>
          </div>
          <div className=" mb-space-large">
            <h5 className="mb-4 font-medium">Описание</h5>
            <textarea
              className="py-[15px] px-5 rounded-[15px] w-full resize-none h-[167px] text-sm lg:text-xl xl:text-2xl"
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
            <h5 className="mb-4">Ваше имя</h5>
            <Input placeholder={"Имя"} />
          </div>
          <div className="mb-space-large">
            <h5 className="mb-4">Телефон</h5>
            <Input type={"tel"} placeholder={"+7 (999) 000-00-00"} />
          </div>
          <div className="mb-space-large">
            <h5 className="mb-4">Когда нужна помощь?</h5>
            <div className="grid md:grid-cols-2 items-center gap-7">
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
                  className="cursor-pointer pl-[44px] relative text-sm lg:text-xl xl:text-2xl text-sapphire before:absolute before:top-[50%] before:left-0 before:-translate-y-1/2 before:z-20 before:w-8 before:h-8 before:rounded-[5px] before:bg-white before:bg-container before:bg-no-repeat before:bg-center peer-checked:before:bg-[url('/check-box.svg')]"
                >
                  Срочно, в ближайшее время
                </label>
              </div>
            </div>
          </div>
          <div className="mb-space-large">
            <h5 className="mb-4">Адрес или ориентир</h5>
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
