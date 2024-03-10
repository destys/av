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
        <div className="flex justify-between md:justify-start items-center gap-5 md:mb-4 py-2.5 px-medium md:p-0 rounded-x-large md:rounded-none bg-white bg-opacity-10 md:bg-transparent font-mediun text-lg md:text-[32px]">
          <p>{title}</p>
          <IconButton type={"filled"} icon={"arrow-link"} />
        </div>
      )}
      <ul className={twMerge("", menuClassList)}>
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
