"use client";

import Icon from "../icon/Icon";
import { twMerge } from "tailwind-merge";

export default function IconButton({ icon, type, className, ...props }) {
  const isFilled = type === "filled";
  const isOutlined = type === "outlined";

  const getBackgroundColor = () => {
    if (isFilled) return "bg-navy hover:bg-navy-700";
    if (isOutlined) return "hover:bg-navy-200";
    return "";
  };

  const getIconColor = () => {
    if (isFilled) return "fill-white";
    if (isOutlined) return "fill-navy";
    return "";
  };

  return (
    <div
      className={twMerge(
        "flex justify-center items-center rounded-full border border-navy grow-0 shrink-0 basis-[45px] w-[45px] h-[45px] cursor-pointer transition xl:w-[60px] xl:h-[60px] xl:basis-[60px]",
        getBackgroundColor(),
        className
      )}
      {...props}
    >
      <Icon
        name={icon}
        size={36}
        color={`${
          type === "filled"
            ? "fill-white"
            : type === "outlined"
            ? "fill-navy"
            : ""
        }`}
        className="max-w-6"
      />
    </div>
  );
}
