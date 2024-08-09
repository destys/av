import React, { useState } from "react";
import Icon from "@/components/ui/icon/Icon";

export default function FAQItem({ item }) {
  console.log("item: ", item);
  const [open, setOpen] = useState(false);
  console.log("open: ", open);

  return (
    <div className="mb-3.5 cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center py-2.5 px-[15px] md:py-[15px] md:px-large xl:py-4 bg-white rounded-2xl xs:rounded-large">
        <h4 className="flex-auto">{item.question}</h4>
        <div className="flex-0 py-1.5 px-2.5 md:py-2.5 md:px-5 xl:py-2 xl:px-7 xl:basis-[11px] bg-navy-100 rounded-large xl:rounded-x-large">
          <Icon
            name={"arrow-left"}
            size={48}
            color={"fill-navy"}
            className={`${
              !open && "-rotate-90"
            } transition max-w-6 max-h-6 xl:max-w-none xl:max-h-none`}
          />
        </div>
      </div>
      <p
        className={`relative z-[-1] text-lynch-800 opacity-0 h-0 transition-opacity ${
          !!open &&
          "opacity-100 h-auto py-2.5 px-[15px] xs:px-5 sm:py-[15px] sm:px-large !z-10"
        }`}
      >
        {item.answer}
      </p>
    </div>
  );
}
