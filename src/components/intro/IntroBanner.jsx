import Image from "next/image";

import Icon from "../ui/icon/Icon";
import EntryModel from "./EntryModel";
import IntroCallback from "./IntroCallback";

import styles from "./IntroBanner.module.scss";
import getPage from "@/actions/GetPage";
import { replaceVariablesInText } from "@/utils/extractDataFromParams";

export default async function IntroBanner({ data, params }) {
  const brands = await getPage("car-brands");
  console.log('brands: ', brands);

  return (
    <section className={styles.intro}>
      <div className="container grid grid-cols-2 gap-5 sm:gap-space-large xl:flex ">
        <div className={styles.left}>
          <div className={styles.image}>
            {data?.image.data?.attributes && (
              <Image
                src={`${process.env.API_URL}${data.image.data?.attributes?.formats?.small.url}`}
                width={data.image.data.attributes.formats.small.width}
                height={data.image.data.attributes.formats.small.height}
                alt={data.h1}
                priority
              />
            )}
          </div>
          <div className={styles.content}>
            <h1 className="mb-5">{replaceVariablesInText(data?.h1, params)}</h1>
            <p>{replaceVariablesInText(data?.description, params)}</p>
          </div>
          <div className={styles.entry}>
            <EntryModel brands={brands} params={params} />
          </div>
        </div>
        <div className={styles.right}>
          <button className="flex md:flex-col justify-between order-2 sm:order-1 relative px-3 sm:px-large py-5 md:p-large w-full bg-sapphire md:h-[265px] rounded-2xl xs:rounded-large text-left overflow-hidden">
            <Image
              src={"/banner/electrical-help.png"}
              width={337}
              height={261}
              alt="electrical-help"
              className="hidden md:block md:absolute md:bottom-0 md:right-0 md:z-10 h-full"
            />
            <h4 className="text-white tracking-little">
              Помощь <br />
              автоэлектрирка
            </h4>
            <Icon
              name={"arrow-link"}
              color="fill-white"
              size={48}
              className={"max-w-6 md:max-w-none"}
            />
          </button>
          <button className="flex md:flex-col justify-between order-2 sm:order-1 relative px-3 sm:px-large py-5 md:p-large w-full bg-lynch-100 md:h-[265px] rounded-2xl xs:rounded-large text-left overflow-hidden">
            <Image
              src={"/banner/tow-image.png"}
              width={586}
              height={247}
              alt="tow-image"
              className="hidden md:block md:absolute md:bottom-0 md:right-0 md:z-10 h-full"
            />
            <h4 className="text-sapphire tracking-little">
              Вызов <br />
              эвакуатора
            </h4>
            <Icon
              name={"arrow-link"}
              color="fill-sapphire"
              size={48}
              className={"max-w-6 md:max-w-none"}
            />
          </button>
          {/* <IntroCallback /> */}
        </div>
      </div>
    </section>
  );
}
