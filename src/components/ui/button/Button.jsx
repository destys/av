"use cleint";

import Icon from "../icon/Icon";
import { twMerge } from "tailwind-merge";

export default function Button({
  icon,
  style,
  link,
  width,
  children,
  className,
  iconClassName,
  ...props
}) {
  const typeClasses = getTypeClasses(style);

  return (
    <button
      className={twMerge(
        `flex justify-center items-center gap-5 py-3 md:py-4 lg:py-[18px] px-5 rounded-large border-2 border-navy font-semibold  whitespace-nowrap transition text-sm md:text-lg xl:text-2xl ${
          icon && "justify-between md:justify-center"
        }`,
        typeClasses,
        className
      )}
      {...props}
    >
      {children}
      {icon && (
        <Icon
          name={icon}
          size={36}
          color={getIconColor(style)}
          className={twMerge(
            "max-w-[18px] max-h-[18px] md:max-w-6 md:max-h-6 lg:max-w-none lg:max-h-none",
            iconClassName
          )}
        />
      )}
    </button>
  );
}

function getTypeClasses(style) {
  switch (style) {
    case "filled":
      return "bg-navy text-white hover:bg-navy-700";
    case "filled-full":
      return "w-full bg-navy text-white hover:bg-navy-700";
    case "outlined":
      return "text-navy  hover:bg-navy-200";
    case "outlined-full":
      return "flex w-full text-navy  hover:bg-navy-200";
    default:
      return "";
  }
}

function getIconColor(style) {
  switch (style) {
    case "filled":
      return "fill-white";
    case "filled-full":
      return "fill-white";
    case "outlined":
      return "fill-navy";
    case "outlined-full":
      return "fill-navy";
    default:
      return "";
  }
}
