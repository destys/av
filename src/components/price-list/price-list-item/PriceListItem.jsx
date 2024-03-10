import Icon from "@/components/ui/icon/Icon";
import Link from "next/link";
import React from "react";

export default function PriceListItem({ item }) {
  return (
    <Link
      href={"/services/models"}
      className="flex items-center gap-2.5 md:gap-space-large p-[15px] md:p-x-large md:py-5 xl:p-large bg-navy-100 rounded-2xl xs:rounded-large border border-transparent hover:border-navy"
    >
      <h5 className="flex-auto text-sm md:text-2xl lg:text-3xl">
        {item.title}
      </h5>
      <p className="font-medium text-sm md:text-2xl lg:text-3xl text-navy whitespace-nowrap">
        от {item.price} ₽
      </p>
      <Icon
        name={"arrow-link"}
        size={36}
        color={"fill-navy"}
        className="hidden xs:block basis-[18px] min-w-[18px] md:basis-6 md:min-w-[24px] xl:basis-9 xl:min-w-[36px]"
      />
    </Link>
  );
}
