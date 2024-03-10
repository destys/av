import IntroSmall from "@/components/intro-small/IntroSmall";
import PriceList from "@/components/price-list/PriceList";
import Search from "@/components/search/Search";
import Services from "@/components/services/Services";

import { SERVICES } from "./services.data";
import TextBlock from "@/components/text-block/TextBlock";

export default function ModelsPage() {
  return (
    <>
      <IntroSmall isShowAdditional={true} />
      <Search />
      <PriceList />
      <Services title="Другие услуги для Audi A4" data={SERVICES} />
      <TextBlock />
    </>
  );
}
