"use client";
import Link from "next/link";
import styles from "./Footer.module.scss";
import Logotype from "@/components/ui/logotype/Logotype";
import Button from "@/components/ui/button/Button";
import Menu from "@/components/menu/Menu";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const menuItems = [
    { id: 1, title: "Ремонт AUDI" },
    { id: 2, title: "Ремонт BMW" },
    { id: 3, title: "Ремонт Mercedes" },
    { id: 4, title: "Ремонт VOLVO" },
    { id: 5, title: "Ремонт TOYOTA" },
    { id: 6, title: "Ремонт SUZUKI" },
    { id: 7, title: "Ремонт DATSUN" },
    { id: 8, title: "Ремонт Volkswagen" },
  ];

  const menuBottomFooterItems = [
    { id: 1, title: "Политика конфиденциальности" },
    { id: 2, title: "Политика обработки и защиты информации" },
  ];
  return (
    <footer className={styles.footer}>
      <div className="container xl:px-large">
        <div className={styles.top}>
          <Logotype />
          <Link
            href={"tel:+74950002040"}
            className="hidden xl:block xl:flex-auto xl:font-semibold xl:text-[40px] xl:text-lynch-800 xl:text-right xl:whitespace-nowrap"
          >
            +7 495 000 20 40
          </Link>
          <Button
            style={"filled"}
            onClick={() => alert("Callback")}
            className={"hidden md:flex"}
          >
            Оставить заявку
          </Button>
        </div>
        <div className={styles.menus}>
          <div className="hidden 2xl:block">
            <p className="2xl:text-lynch-300 2xl:leading-none">
              Мобильный автосервис в Москве, который предлагает быстрые сроки
              реагирования, круглосуточную доступность, возможность заказа
              запасных частей.
            </p>
          </div>
          <Menu
            title={"О сервисе"}
            items={menuItems}
            menuItemClassList={"mb-medium max-md:hidden"}
          />
          <Menu
            title={"Автоуслуги"}
            items={menuItems}
            menuItemClassList={"mb-medium max-md:hidden"}
          />
          <Menu
            title={"Полезное"}
            items={menuItems}
            menuItemClassList={"mb-medium max-md:hidden"}
          />
        </div>
        <div className={styles.bottom}>
          <p className="mb-2.5 sm:mb-0">© {currentYear} «АВТОПОМОЩЬ»</p>
          <Menu
            items={menuBottomFooterItems}
            menuClassList={
              "flex flex-col justify-center xs:flex-row gap-2.5 md:gap-5"
            }
            menuItemClassList={"text-center"}
          />
        </div>
      </div>
    </footer>
  );
}
