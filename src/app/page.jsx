import Calculate from "@/components/calculate/Calculate";
import FAQ from "@/components/faq/FAQ";
import IntroBanner from "@/components/intro/IntroBanner";
import OurService from "@/components/our-service/OurService";
import Search from "@/components/search/Search";
import Services from "@/components/services/Services";
import TextBlock from "@/components/text-block/TextBlock";

const revalidate = 0;

export default function Home() {
  const services = {
    primary: {
      data: [
        {
          id: 0,
          title: "Вызов эвакуатора и манипулятора",
          icon: "evacuator",
        },
        {
          id: 1,
          title: "Мобильный шиномонтаж",
          icon: "shinomontaj",
        },
        {
          id: 2,
          title: "Компьютерная диагностика",
          icon: "diagnostika",
        },
        {
          id: 3,
          title: "Противоугонные системы",
          icon: "signalizacia",
        },
        {
          id: 4,
          title: "Разблокировка и ремонт АКПП",
          icon: "akpp",
        },
        {
          id: 5,
          title: "Вызов эвакуатора и манипулятора",
          icon: "evacuator",
        },
        {
          id: 6,
          title: "Мобильный шиномонтаж",
          icon: "shinomontaj",
        },
        {
          id: 7,
          title: "Компьютерная диагностика",
          icon: "diagnostika",
        },
        {
          id: 8,
          title: "Противоугонные системы",
          icon: "signalizacia",
        },
        {
          id: 9,
          title: "Разблокировка и ремонт АКПП",
          icon: "akpp",
        },
        {
          id: 10,
          title: "Вызов эвакуатора и манипулятора",
          icon: "evacuator",
        },
        {
          id: 11,
          title: "Мобильный шиномонтаж",
          icon: "shinomontaj",
        },
        {
          id: 12,
          title: "Компьютерная диагностика",
          icon: "diagnostika",
        },
        {
          id: 13,
          title: "Противоугонные системы",
          icon: "signalizacia",
        },
        {
          id: 14,
          title: "Разблокировка и ремонт АКПП",
          icon: "akpp",
        },
      ],
    },

    secondary: {
      data: [],
    },
  };
  return (
    <>
      <IntroBanner
        image={"home-title-image.png"}
        imageWidth={660}
        imageHeight={550}
      />
      <Search />
      <Services data={services} />
      <OurService />
      <Calculate />
      <FAQ />
      <TextBlock />
    </>
  );
}
