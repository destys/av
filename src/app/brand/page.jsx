import Calculate from "@/components/calculate/Calculate";
import FAQ from "@/components/faq/FAQ";
import IntroSmall from "@/components/intro-small/IntroSmall";
import Models from "@/components/models/Models";
import Search from "@/components/search/Search";
import Services from "@/components/services/Services";
import TextBlock from "@/components/text-block/TextBlock";

import { SERVICES } from "./services.data";
import PriceList from "@/components/price-list/PriceList";

export default function BrandPage() {
  return (
    <>
      <IntroSmall />
      <Models />
      <Search />
      <PriceList />
      <Calculate />
      <Services title="Другие услуги для Audi" data={SERVICES} />
      <TextBlock />
      <FAQ />
    </>
  );
}
