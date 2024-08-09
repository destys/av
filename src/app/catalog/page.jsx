import Catalog from "@/components/catalog/Catalog";
import IntroSmall from "@/components/intro-small/IntroSmall";
import OurService from "@/components/our-service/OurService";
import Search from "@/components/search/Search";

export default function CatalogPage() {
  console.log('first')
  return (
    <>
      <IntroSmall
        title="Каталог услуг"
        text="Автопомощь предлагает широкий спектр услуг для бесперебойной работы вашего автомобиля. Это включает регулярное техническое обслуживание, такое как замена масла, переборка шин, проверка тормозов и жидкостей."
        image={"/banner/catalog.png"}
      />
      <Search isShowAllHidden={true} />
      <Catalog />
      <OurService />
    </>
  );
}
