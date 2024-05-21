import Menu from "@/components/menu/Menu";
import getMenu from "@/actions/GetMenu";

import styles from "./Footer.module.scss";
import FooterTop from "./components/FooterTop";

export default async function Footer() {
  const menuCol1 = await getMenu("menu-footer-col-1");
  const menuCol2 = await getMenu("menu-footer-col-2");
  const menuCol3 = await getMenu("menu-footer-col-3");
  const menuCol4 = await getMenu("menu-footer-col-4");

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
        <FooterTop />
        <div className={styles.menus}>
          <div className="hidden 2xl:block">
            <p className="2xl:text-lynch-300 2xl:leading-none">
              Мобильный автосервис в Москве, который предлагает быстрые сроки
              реагирования, круглосуточную доступность, возможность заказа
              запасных частей.
            </p>
          </div>
          {menuCol1 && (
            <Menu
              title={menuCol1.menu_title}
              items={menuCol1.menu_item}
              menuItemClassList={"mb-medium max-md:hidden"}
            />
          )}

          {menuCol2 && (
            <Menu
              title={menuCol2.menu_title}
              items={menuCol2.menu_item}
              menuItemClassList={"mb-medium max-md:hidden"}
            />
          )}
          {menuCol3 && (
            <Menu
              title={menuCol3.menu_title}
              items={menuCol3.menu_item}
              menuItemClassList={"mb-medium max-md:hidden"}
            />
          )}
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
