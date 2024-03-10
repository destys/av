import React from "react";
import IconButton from "../ui/iconButton/IconButton";
import { useSwiper } from "swiper/react";

export default function ModelsNavigation() {
  const swiper = useSwiper();

  return (
    <div className="grid grid-cols-2 gap-2">
      <IconButton
        type={"filled"}
        icon={"arrow-left"}
        className={
          "rounded-large w-12 md:w-16 lg:w-[84px] h-12 md:h-[60px] bg-[#007AEA]"
        }
        onClick={() => swiper.slidePrev()}
      />
      <IconButton
        type={"filled"}
        icon={"arrow-right"}
        className={
          "rounded-large w-12 md:w-16 lg:w-[84px] h-12 md:h-[60px] bg-[#007AEA]"
        }
        onClick={() => swiper.slideNext()}
      />
    </div>
  );
}
