'use client';
import React from "react";
import Select from "../ui/select/Select";

export default function EntryModel() {
  const handleSelect = (selectedOption) => {
    console.log("Selected option:", selectedOption);
  };

  const options = [
    { label: "Audi", value: "Audi" },
    { label: "BMW", value: "BMW" },
    { label: "Volkswagen", value: "volkswagen" },
  ];

  const options_models = [
    { label: "Model 1", value: "model_1" },
    { label: "Model 2", value: "model_2" },
    { label: "Model 3", value: "model_3" },
  ];

  return (
    <>
      <h5 className="mb-4 sm:mb-5">Выберите марку и модель</h5>
      <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-4 max-w-[660px]">
        <Select
          options={options}
          onSelect={handleSelect}
          placeholder={"Выберите марку"}
        />
        <Select
          options={options_models}
          onSelect={handleSelect}
          placeholder={"Выберите модель"}
        />
      </div>
    </>
  );
}
