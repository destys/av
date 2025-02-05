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
import axios from "axios";
import { emailRecipient } from "@/constants";

export default function CallbackModal() {
  const [brands, setBrands] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");

  const { onClose, isOpen } = useCallbackModal();
  const [currentStep, setCurrentStep] = useState(0);
  const successModal = useSuccessModal();

  const steps = [
    { id: 0, title: "Машина" },
    { id: 1, title: "Проблема" },
    { id: 2, title: "Место" },
  ];

  const typeOfCar = [
    { id: 0, title: "Легковые авто", value: "Легковые авто" },
    { id: 1, title: "Лёгкие коммерческие", value: "Лёгкие коммерческие" },
    { id: 2, title: "Прицепы", value: "Прицепы" },
    { id: 3, title: "Грузовики и седельные тягачи", value: "Грузовики" },
    { id: 4, title: "Спецтехника", value: "Спецтехника" },
  ];

  const handleSelectService = (selectedOption) => {
    setSelectedService(selectedOption.value || "");
    setServiceDescription(selectedOption.description || "");
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("selectedService", selectedService);

    const data = Object.fromEntries(formData.entries());

    const htmlContent = `
      <h1>Новая заявка на ремонт</h1>
      <p><strong>Тип авто:</strong> ${data.typeOfCar || "Не указано"}</p>
      <p><strong>Выбранная услуга:</strong> ${
        data.selectedService || "Не указано"
      }</p>
      <p><strong>Описание проблемы:</strong> ${
        data.problemDescription || "Не указано"
      }</p>
      <p><strong>Имя клиента:</strong> ${data.name || "Не указано"}</p>
      <p><strong>Телефон:</strong> ${data.phone || "Не указано"}</p>
      <p><strong>Дата помощи:</strong> ${data.date || "Не указано"}</p>
      <p><strong>Срочность:</strong> ${
        data.isUrgent === "true" ? "Да" : "Нет"
      }</p>
      <p><strong>Адрес:</strong> ${data.address || "Не указано"}</p>
    `;

    try {
      await axios.post(
        `${process.env.API_URL}/api/email`,
        {
          to: emailRecipient,
          replyTo: emailRecipient || "noreply@example.com",
          subject: "Новая заявка на ремонт",
          html: htmlContent,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`,
          },
        }
      );
      onClose();
      successModal.onOpen();
    } catch (error) {
      console.error("An error occurred:", error);
      alert("Ошибка при отправке формы. Пожалуйста, попробуйте снова.");
    }
  };

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await getPage("car-brands");
        setBrands(response);
      } catch (error) {
        console.error("Ошибка при загрузке брендов: ", error);
      }
    };

    const fetchServices = async () => {
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
        console.error("Ошибка при загрузке услуг: ", error);
      }
    };

    fetchBrands();
    fetchServices();
  }, []);

  return (
    <Modal
      title={"Заявка на ремонт"}
      isOpen={isOpen}
      onChange={() => onClose()}
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
        <div className={currentStep === 0 ? "grid lg:gap-[15px]" : "hidden"}>
          <div className="mb-[15px] lg:mb-space-large">
            <h5 className="mb-4 font-medium">Тип авто</h5>
            <div className="hidden lg:flex flex-wrap gap-4">
              {typeOfCar.map((type) => (
                <div key={type.id}>
                  <input
                    type="radio"
                    name="typeOfCar"
                    id={`type-of-car-${type.id}`}
                    value={type.value}
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
        <div className={currentStep === 1 ? "block" : "hidden"}>
          <div className=" mb-space-large">
            <h5 className="mb-4 font-medium">Услуга</h5>
            <Select
              options={services}
              onSelect={handleSelectService}
              placeholder={"Выберите услугу"}
            />
            <input
              type="hidden"
              name="selectedService"
              value={selectedService}
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
              name="problemDescription"
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
        <div className={currentStep === 2 ? "block" : "hidden"}>
          <div className="mb-space-large">
            <h5 className="mb-4">Ваше имя</h5>
            <Input name="name" placeholder="Имя" />
          </div>
          <div className="mb-space-large">
            <h5 className="mb-4">Телефон</h5>
            <Input name="phone" type="tel" placeholder="+7 (999) 000-00-00" />
          </div>
          <div className="mb-space-large">
            <h5 className="mb-4">Когда нужна помощь?</h5>
            <div className="grid grid-cols-2 gap-5 items-center">
              <Input name="date" type="date" placeholder="Выберите дату" />
              <input type="hidden" name="isUrgent" value="false" />
              <div>
                <input
                  type="checkbox"
                  name="isUrgent"
                  id="urgently"
                  value="true"
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
            <h5 className="mb-4">Адрес</h5>
            <Input
              name="address"
              placeholder="Пример: Москва, 36-км МКАД, внешняя сторона"
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
