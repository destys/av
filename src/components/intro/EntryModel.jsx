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
  const [selectedBrand, setSelectedBrand] = useState([]);

  const handleSelectBrand = (selectedOption) => {
    setSelectedBrand(selectedOption.models);
    setBrandSlug(selectedOption.slug);
    setLink(selectedOption.slug);
  };
  const handleSelectModel = (selectedOption) => {
    setLink("");
    setLink(`${brandSlug}_${selectedOption.slug}`);
  };

  const options = brands.map((item) => ({
    label: item.attributes.title,
    value: item.attributes.title.toLowerCase(),
    slug: item.attributes.slug,
    models: item.attributes.car_models?.data,
  }));

  const options_models = selectedBrand.map((item) => ({
    label: item.attributes.title,
    value: item.attributes.title.toLowerCase(),
    slug: item.attributes.slug,
  }));

  return (
    <div className="grid sm:grid-cols-3 gap-2.5 sm:gap-4">
      <div className="sm:col-span-2">
        <h5 className="mb-4 sm:mb-5">Выберите марку и модель</h5>
        <div className="grid gap-2.5 xs:grid-cols-2 sm:gap-4">
          <Select
            options={options}
            onSelect={handleSelectBrand}
            placeholder={"Выберите марку"}
          />
          <Select
            options={options_models}
            onSelect={handleSelectModel}
            placeholder={"Выберите модель"}
          />

          {link && !hideLink && (
            <Link
              href={`${
                params ? params.services + "/" + link : "catalog/" + link
              }`}
            >
              <Button style="filled" className="w-full">
                Перейти
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
