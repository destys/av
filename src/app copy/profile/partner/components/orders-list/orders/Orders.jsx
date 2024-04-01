"use client";

import { useState } from "react";

import OrdersItem from "@/app/profile/components/orders-item/OrdersItem";
import Button from "@/components/ui/button/Button";

export default function Orders({ item, index, activeTab }) {
  const initialItemsToShow = 10;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const handleExpandClick = () => {
    setItemsToShow(itemsToShow + initialItemsToShow);
  };

  return (
    <div className={activeTab === index ? "block" : "hidden"}>
      <div className="grid gap-2.5 sm:gap-5 xl:gap-8">
        {item.data.slice(0, itemsToShow).map((item) => (
          <OrdersItem key={item.id} order={item} />
        ))}
      </div>
      {itemsToShow < item.data.length && (
        <Button
          style={"outlined-full"}
          icon={"arrow-down"}
          onClick={handleExpandClick}
          className={"mt-space-large"}
        >
          Загрузить еще
        </Button>
      )}
    </div>
  );
}
