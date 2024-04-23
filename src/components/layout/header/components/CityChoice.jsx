"use client";

import Icon from "@/components/ui/icon/Icon";
import Select from "@/components/ui/select/Select";

export default function CityChoice() {
  const options = [
    { label: "Санкт-Петербург", value: "spb" },
    { label: "Москва", value: "msk" },
  ];

  const handleSelect = (selectedOption) => {};

  return (
    <div className="hidden w-fit sm:flex sm:items-center sm:gap-2 sm:order-1 md:order-2">
      <span className="hidden xl:block text-xl text-lynch-300">Город:</span>
      <div className="flex gap-3 items-center">
        <Select
          options={options}
          onSelect={handleSelect}
          selectClassNames="!p-0 !bg-transparent border-none text-lg !text-navy underline !rounded-none lg:text-xl"
          id={"city"}
        />
        <button className="order-3">
          <Icon name={"info"} size={24} color={"fill-navy"} />
        </button>
      </div>
    </div>
  );
}
