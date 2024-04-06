import Image from "next/image";

import Icon from "../ui/icon/Icon";
import EntryModel from "./EntryModel";
import IntroCallback from "./IntroCallback";

import styles from "./IntroBanner.module.scss";

export default function IntroBanner({ data }) {
  return (
    <section className={styles.intro}>
      <div className="container grid grid-cols-2 gap-5 sm:gap-space-large xl:flex ">
        <div className={styles.left}>
          <div className={styles.image}>
            {data?.image.data?.attributes && (
              <Image
                src={`${process.env.API_URL}${data.image.data.attributes.formats.small.url}`}
                width={data.image.data.attributes.formats.small.width}
                height={data.image.data.attributes.formats.small.height}
                alt={data.h1}
                priority
              />
            )}
          </div>
          <div className={styles.content}>
            <h1 className="mb-5">{data?.h1}</h1>
            <p>{data?.description}</p>
          </div>
          <div className={styles.entry}>
            <EntryModel />
          </div>
        </div>
        <div className={styles.right}>
          <button className="flex md:flex-col justify-between order-2 sm:order-1 relative px-3 sm:px-large py-5 md:p-large w-full bg-sapphire md:h-[265px] rounded-2xl xs:rounded-large text-left overflow-hidden">
            <Image
              src={"/banner/join-telegram-group.png"}
              width={195}
              height={265}
              alt="join-telegram-group"
              className="hidden md:block md:absolute md:bottom-0 md:right-[-30px] md:z-10"
            />
            <h4 className="text-white tracking-little">
              Присоединяйся <br />
              как исполнитель
            </h4>
            <Icon
              name={"arrow-link"}
              color="fill-white"
              size={48}
              className={"max-w-6 md:max-w-none"}
            />
          </button>
          <IntroCallback />
        </div>
      </div>
    </section>
  );
}
