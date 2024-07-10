import Link from "next/link";
import Icon from "../ui/icon/Icon";
import IconButton from "../ui/iconButton/IconButton";
import { twMerge } from "tailwind-merge";

export default function Menu({
  title,
  containerClassList,
  menuClassList,
  menuItemClassList,
  items,
}) {
  return (
    <div className={containerClassList}>
      {title && (
        <h3 className="flex justify-between md:justify-end items-center gap-5 md:mb-4 py-2.5 px-medium md:p-0 rounded-x-large md:rounded-none bg-white bg-opacity-10 md:bg-transparent text-right">
          {title}
        </h3>
      )}
      <ul className={twMerge("text-right", menuClassList)}>
        {items.map((item) => (
          <li key={item.id} className={`${menuItemClassList} hover:text-navy`}>
            <Link href="#" className="underline">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
