"use client";

import Button from "@/components/ui/button/Button";
import BlogItem from "../../blog-item/BlogItem";
import { useState } from "react";

export default function Posts({ item, index, activeTab }) {
  const initialItemsToShow = 6;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const handleExpandClick = () => {
    setItemsToShow(itemsToShow + initialItemsToShow);
  };
  return (
    <div className={activeTab === index ? "block" : "hidden"}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-y-space-large xl:gap-space-large">
        {item.data.slice(0, itemsToShow).map((item) => (
          <BlogItem key={item.id} item={item} />
        ))}
      </div>
      {itemsToShow < item.data.length && (
        <Button
          style={"outlined-full"}
          icon={"arrow-down"}
          onClick={handleExpandClick}
          className="mt-5 md:mt-space-large"
        >
          Загрузить еще
        </Button>
      )}
    </div>
  );
}
