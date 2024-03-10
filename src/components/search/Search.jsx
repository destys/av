import Link from "next/link";

import Button from "../ui/button/Button";
import Input from "../ui/input/Input";

import styles from "./Search.module.scss";

export default function Search({ isShowAllHidden }) {
  return (
    <section className={styles.search}>
      <div className="container flex gap-medium py-2.5 px-medium rounded-x-large bg-sapphire">
        {!isShowAllHidden && (
          <Link href="/catalog">
            <Button
              style={"filled"}
              icon="menu-burger"
              className={"flex-row-reverse tracking-little h-full"}
            >
              Полный каталог услуг
            </Button>
          </Link>
        )}
        <Input
          type={"text"}
          placeholder={"Введите название услуги"}
          iconBefore={"search"}
        />
      </div>
    </section>
  );
}
