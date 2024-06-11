"use client";

import { twMerge } from "tailwind-merge";
import ReactInputMask from "react-input-mask";

import Icon from "../icon/Icon";

export default function Input({
  type,
  label,
  placeholder,
  mask,
  className,
  iconBefore,
  iconAfter,
  ...props
}) {
  return (
    <>
      {label && (
        <label className="block mb-2.5 font-medium text-3xl">{label}</label>
      )}
      <div
        className={twMerge(
          "flex items-center gap-5 py-3 px-4 xs:py-2.5 xs:px-5 xl:py-medium xl:px-large border-[2px] border-white bg-white flex-auto rounded-x-large",
          className
        )}
      >
        {iconBefore && (
          <Icon name={iconBefore} color={"fill-lynch-200"} size={36} />
        )}

        {type === "tel" ? (
          <ReactInputMask
            mask={mask || "+7 (999) 999-99-99"}
            className="w-full xl:text-2xl bg-white leading-none"
            placeholder={placeholder || "+7 (999) 000-00-00"}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            {...props}
            className="w-full xl:text-2xl leading-none"
          />
        )}

        {iconAfter && (
          <Icon name={iconAfter} color={"fill-lynch-200"} size={36} />
        )}
      </div>
    </>
  );
}
