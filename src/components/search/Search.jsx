// Search.jsx

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import getSearchResults from "@/actions/GetSearhResults";

import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import Icon from "../ui/icon/Icon";

import styles from "./Search.module.scss";

export default function Search({ isShowAllHidden }) {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (searchText.trim() === "") {
        setResults([]);
        return;
      }

      const searchResults = await getSearchResults(searchText);
      setResults(searchResults);
    };

    const delaySearch = setTimeout(fetchResults, 500);

    return () => clearTimeout(delaySearch);
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const highlightText = (text, query) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className={styles.highlight}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className={styles.search}>
      <div className="container flex rounded-x-large border-8 border-sapphire">
        <div className="flex items-center gap-5 px-4 xs:px-5 xl:px-large flex-auto ">
          <Icon name={"search"} color={"fill-lynch-200"} size={36} />
          <div className="w-full relative">
            <Input
              type={"text"}
              placeholder={"Введите название услуги"}
              className="rounded-r-none w-full border-0 text-[22px] placeholder:text-lynch-300"
              value={searchText}
              onChange={handleChange}
            />
            {results.length > 0 && (
              <div className={styles.results}>
                {results.map((item) => (
                  <Link
                    href={`/${
                      item.collection === "services-main"
                        ? item.attributes.slug
                        : item.collection === "service-types"
                        ? item.attributes.service_main?.data?.attributes.slug +
                          "_" +
                          item.attributes.slug
                        : item.attributes.service_type.data?.attributes
                            .service_main.data?.attributes.slug +
                          "_" +
                          item.attributes.service_type.data?.attributes.slug +
                          "_" +
                          item.attributes.slug
                    }`}
                    className={styles.item}
                    key={item.attributes.slug}
                  >
                    {highlightText(item.attributes.title, searchText)}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        {!isShowAllHidden && (
          <Button
            style={"filled"}
            className={
              "basis-[186px] py-5 !px-10 flex-row-reverse tracking-little h-full"
            }
          >
            Найти
          </Button>
        )}
      </div>
    </section>
  );
}
