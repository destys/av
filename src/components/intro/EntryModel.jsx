"use client";
import React, { useState } from "react";
import Link from "next/link";

import Select from "../ui/select/Select";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";

export default function EntryModel({
  params,
  brands,
  hideLink,
  showYear = false,
}) {
  const [link, setLink] = useState("");
  const [brandSlug, setBrandSlug] = useState("");
  const [modelSlug, setModelSlug] = useState("");
  const [models, setModels] = useState([]);
  const [generations, setGenerations] = useState([]);

  const handleSelectBrand = (selectedOption) => {
    setModels(selectedOption.models);

    setBrandSlug(selectedOption.slug);
    setLink(selectedOption.slug);
  };

  const handleSelectModel = (selectedOption) => {
    setLink("");
    setLink(`${brandSlug}_${selectedOption.slug}`);

    setGenerations(selectedOption.generations.data);
    setModelSlug(selectedOption.slug);
  };

  const handleSelectGeneration = (selectedOption) => {
    setLink("");
    setLink(`${brandSlug}_${modelSlug}_${selectedOption.slug}`);
  };

  useState(() => {}, []);

  const options = brands
    .filter((item) => item.attributes.hidden !== true)
    .map((item) => ({
      label: item.attributes.title,
      value: item.attributes.title.toLowerCase(),
      slug: item.attributes.slug,
      models: item.attributes.car_models?.data,
    }));

  const options_models = models
    .filter((item) => item.attributes.hidden !== true)
    .map((item) => ({
      label: item.attributes.title,
      value: item.attributes.title.toLowerCase(),
      slug: item.attributes.slug,
      generations: item.attributes.car_generations,
    }));

  const options_generation = generations
    .filter((item) => item.attributes.hidden !== true)
    .map((item) => ({
      label: item.attributes.title,
      value: item.attributes.title.toLowerCase(),
      slug: item.attributes.slug,
    }));

  return (
    <div className="grid sm:grid-cols-3 gap-2.5 sm:gap-4">
      <div className="sm:col-span-2">
        <h5 className="mb-4 sm:mb-5">Какой у вас автомобиль?</h5>
        <div className="grid gap-2.5 xs:grid-cols-2 sm:gap-4 sm:max-w-[571px]">
          <Select
            options={options}
            onSelect={handleSelectBrand}
            placeholder={"Марка"}
          />
          <Select
            options={options_models}
            onSelect={handleSelectModel}
            placeholder={"Модель"}
            disabled={!!!models.length}
          />
          <Select
            options={options_generation}
            onSelect={handleSelectGeneration}
            placeholder={"Поколение"}
            disabled={!!!generations.length}
          />

          {link && !hideLink && (
            <Link
              href={`${
                params ? params.services + "/" + link : "catalog/" + link
              }`}
            >
              <Button style="filled" icon={"arrow-link"} className="w-full">
                Выбрать
              </Button>
            </Link>
          )}
        </div>
      </div>
      {showYear && (
        <div className="mb-space-large w-full">
          <h5 className="mb-4 sm:mb-5">Год</h5>
          <Input placeholder={"Укажите год"} />
        </div>
      )}
    </div>
  );
}
