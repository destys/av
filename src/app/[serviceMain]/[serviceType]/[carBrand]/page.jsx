import Calculate from "@/components/calculate/Calculate";
import FAQ from "@/components/faq/FAQ";
import IntroSmall from "@/components/intro-small/IntroSmall";
import Models from "@/components/models/Models";
import Search from "@/components/search/Search";
import Services from "@/components/services/Services";
import TextBlock from "@/components/text-block/TextBlock";

import PriceList from "@/components/price-list/PriceList";
import getServicesMain from "@/actions/GetServicesMain";

export default async function BrandPage({ params }) {
  const otherServices = await getServicesMain(`service-types?populate=deep`);
  const page = await getServicesMain(
    `car-brands?populate=deep&filters[slug][$eq]=${params.carBrand}`
  );

  console.log("parentService: ", parentService);

  return (
    <>
      <IntroSmall />
      <Models />
      <Search />
      <PriceList />
      <Calculate />
      {/* <Services title="Другие услуги для Audi" data={SERVICES} /> */}
      <TextBlock />
      <FAQ />
    </>
  );
}
