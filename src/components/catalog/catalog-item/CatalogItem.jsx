"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Icon from "@/components/ui/icon/Icon";

export default function CatalogItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div
        className="flex items-center gap-4 py-1 sm:py-3 px-4 sm:px-large rounded-x-large bg-navy-100 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <Image
          src={`${process.env.API_URL}/${item.attributes.icon?.data?.attributes?.url}`}
          width={64}
          height={64}
          alt={item.title}
          className="hidden sm:block"
        />
        <h5 className="flex-auto text-sm md:text-xl xl:text-[32px]">
          {item.attributes.title}
        </h5>
        <Icon
          name={"arrow-down"}
          size={48}
          color={"fill-navy"}
          className={`${
            open && "rotate-90"
          } transition max-sm:max-w-[24px] max-sm:text-sm`}
        />
      </div>
      <ul
        className={`grid sm:grid-cols-2 gap-x-4 gap-y-2  px-large relative z-[-1] opacity-0 h-0 ${
          !!open && " py-4 opacity-100 h-auto !z-10"
        }`}
      >
        {item.attributes.services_sub.data.map((subcategory) => (
          <li
            key={subcategory.id}
            className="leading-normal text-sm md:text-xl xl:text-[32px]"
          >
            <Link
              href={`${item.attributes.slug}_${subcategory.attributes.slug}`}
              className="hover:text-navy transition"
            >
              {subcategory.attributes.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
