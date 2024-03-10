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
        "flex justify-between md:justify-center items-center gap-5 py-2.5 px-5 rounded-large border-2 border-navy font-semibold  whitespace-nowrap transition text-sm md:text-lg xl:text-2xl",
        typeClasses,
        className
      )}
      {...props}
    >
      {children}
      {icon && <Icon name={icon} size={36} color={getIconColor(style)} className={iconClassName}/>}
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
