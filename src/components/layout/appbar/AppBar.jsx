"use client";
import Icon from "@/components/ui/icon/Icon";
import useCallbackModal from "@/hooks/useCallbackModal";
import useRegistrationModal from "@/hooks/useRegistrationModal";
import Link from "next/link";

export default function AppBar() {
  const callbackModal = useCallbackModal();
  const registrationModal = useRegistrationModal();

  const navigation = [
    {
      id: 0,
      title: "Главная",
      icon: "home",
      link: "/",
    },
    {
      id: 1,
      title: "Заявки",
      icon: "prder-list",
      link: "/profile",
    },
    {
      id: 2,
      title: "Заказать",
      icon: "add-1",
      link: "/",
      onClick: callbackModal.onOpen,
    },
    {
      id: 3,
      title: "Профиль",
      icon: "profile",
      link: "#",
      onClick: registrationModal.onOpen,
    },
    {
      id: 4,
      title: "Услуги",
      icon: "menu-burger",
      link: "/services",
    },
  ];
  return (
    <nav className="fixed left-0 bottom-0 z-50 w-full h-[75px] bg-navy-100 flex md:hidden items-center p-4">
      <ul className="flex justify-between w-full">
        {navigation.map((item) => (
          <li
            key={item.id}
            className="flex flex-col sm:flex-row items-center gap-[5px] text-xs text-navy"
            onClick={item.onClick}
          >
            <Icon name={item.icon} color={"fill-navy"} size={24} />
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
