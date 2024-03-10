import { twMerge } from "tailwind-merge";

const Icon = ({ name, color, size, className }) => (
  <svg
    className={twMerge(`icon icon-${name} xl:max-w-none`, color, className)}
    width={size}
    height={size}
  >
    <use xlinkHref={`/icons.svg#icon-${name}`} />
  </svg>
);

export default Icon;
