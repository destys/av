// Select.js

import React, { useState } from "react";
import styles from "./Select.module.scss";
import { twMerge } from "tailwind-merge";

const Select = ({ options, onSelect, placeholder, selectClassNames }) => {
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
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
