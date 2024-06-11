// Select.js
"use client";
import React, { useState } from "react";
import styles from "./Select.module.scss";
import { twMerge } from "tailwind-merge";
import Icon from "../icon/Icon";

const Select = ({ options, onSelect, placeholder, selectClassNames, id }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    setSelectedOption(selectedOption);
    onSelect(selectedOption);
  };

  return (
    <div className={styles["custom-select-container"]}>
      <select
        value={selectedOption ? selectedOption.value : ""}
        onChange={handleSelectChange}
        className={twMerge(styles["custom-select"], selectClassNames)}
        id={id ? id : ""}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Icon
        name="arrow-down"
        color="fill-navy"
        className="absolute top-[50%] right-3 -translate-y-1/2"
        size={36}
      />
    </div>
  );
};

export default Select;
