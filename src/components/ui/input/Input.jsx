"use client";

import { twMerge } from "tailwind-merge";
import ReactInputMask from "react-input-mask";

import Icon from "../icon/Icon";
import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      type,
      label,
      placeholder,
      mask,
      className,
      iconBefore,
      iconAfter,
      ...props
    },
    ref
  ) => {

    return (
      <>
        {label && (
          <label className="block mb-2.5 font-medium text-3xl">{label}</label>
        )}
        <div
          className={twMerge(
            "flex items-center gap-5 py-2.5 px-4 xs:px-5 xl:px-large border-[2px] border-white bg-white flex-auto rounded-x-large",
            className
          )}
        >
          {iconBefore && (
            <Icon name={iconBefore} color={"fill-lynch-200"} size={36} />
          )}

          {type === "tel" ? (
            <ReactInputMask
              mask={mask || "+7 (999) 999-99-99"}
              className="w-full xl:text-[22px] bg-white leading-none"
              placeholder={placeholder || "+7 (999) 000-00-00"}
              ref={ref}
            />
          ) : (
            <input
              type={type}
              placeholder={placeholder}
              className="w-full xl:text-2xl leading-none"
              ref={ref}
              {...props}
            />
          )}

          {iconAfter && (
            <Icon name={iconAfter} color={"fill-lynch-200"} size={36} />
          )}
        </div>
      </>
    );
  }
);

export default Input;
