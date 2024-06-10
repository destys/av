"use client";

import Icon from "@/components/ui/icon/Icon";
import Select from "@/components/ui/select/Select";
import { useState } from "react";

export default function CityChoice() {
  const [city, setCity] = useState("Москва");
  const [openList, setOpenList] = useState(false);
  const options = [
    { label: "Санкт-Петербург", value: "spb" },
    { label: "Москва", value: "msk" },
  ];

  const handleSetCity = (value) => {
    setCity(value);
    setOpenList(false);
  };

  return (
    <div className="hidden w-fit sm:flex sm:items-center sm:gap-2 sm:order-1 md:order-2">
      <span className="hidden xl:block text-xl text-lynch-300">Город:</span>
      <div className="flex gap-3 items-center">
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setOpenList(!openList)}
          >
            <Icon name="arrow-down" size={24} color="fill-navy" />
            <span className="text-navy">{city}</span>
          </div>
          <ul
            className={`grid gap-2 absolute left-0 top-full whitespace-nowrap p-4 rounded-lg bg-white shadow transition-opacity ${
              openList ? "z-10 opacity-100" : "z-[-1] opacity-0"
            }`}
          >
            <li
              onClick={() => handleSetCity("Москва")}
              className="cursor-pointer transition-color hover:text-navy"
            >
              Москва
            </li>
            <li
              onClick={() => handleSetCity("Санкт-Петербург")}
              className="cursor-pointer transition-color hover:text-navy"
            >
              Санкт-Петербург
            </li>
          </ul>
        </div>
        <button className="order-3">
          <Icon name={"info"} size={24} color={"fill-navy"} />
        </button>
      </div>
    </div>
  );
}
