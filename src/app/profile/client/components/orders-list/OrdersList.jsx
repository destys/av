"use client";
import { useState } from "react";

import Icon from "@/components/ui/icon/Icon";
import OrdersItem from "@/app/profile/components/orders-item/OrdersItem";

import { ORDERS } from "@/app/profile/orders.data";

import styles from "./OrdersList.module.scss";

export default function OrdersList() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className={styles.order_list}>
      <div className={styles.top}>
        {ORDERS.map((item, index) => (
          <button
            key={item.id}
            className={`${
              activeTab === index ? "bg-navy-100" : "bg-lynch-200"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <Icon
              name={item.icon}
              size={48}
              color={activeTab === index ? "fill-navy" : "fill-lynch"}
              className={"hidden sm:block"}
            />
            <span className="text-base md:text-2xl xl:text-4xl">
              {item.title}
            </span>
            <span
              className={`sm:ml-auto py-[5px] px-2.5 rounded-[64px] text-white text-sm md:text-2xl xl:text-4xl ${
                activeTab === index ? "bg-navy" : "bg-lynch"
              }`}
            >
              36
            </span>
          </button>
        ))}
      </div>
      <div className={styles.body}>
        {ORDERS.map((item, index) => (
          <div
            key={item.id}
            className={`grid gap-2.5 sm:gap-5 xl:gap-8 ${activeTab === index ? "block" : "hidden"}`}
          >
            {item.data.map((order) => (
              <OrdersItem key={order.id} order={order} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
