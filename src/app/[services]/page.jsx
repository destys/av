import { pathToRegexp } from "path-to-regexp";

import getData from "@/actions/GetData";

import FAQ from "@/components/faq/FAQ";
import IntroBanner from "@/components/intro/IntroBanner";
import OurService from "@/components/our-service/OurService";
import Search from "@/components/search/Search";
import Services from "@/components/services/Services";
import TextBlock from "@/components/text-block/TextBlock";
import PriceList from "@/components/price-list/PriceList";

export default async function ServicesMainPage({ params }) {
  const regexp = pathToRegexp("/:attr1?{_:attr2}?{_:attr3}?").exec(
    `/${params.services}`
  );

  const getQuery = () => {
    const queries = {
      1: `services-main`,
      2: `service-types`,
      3: `services-sub`,
    };

    if (regexp[3]) {
      return `${queries[3]}?populate=deep&filters[slug][$eq]=${regexp[3]}`;
    }

    if (regexp[2]) {
      return `${queries[2]}?populate=deep&filters[slug][$eq]=${regexp[2]}`;
    }

    if (regexp[1]) {
      return `${queries[1]}?populate=deep&filters[slug][$eq]=${regexp[1]}`;
    }

    return null;
  };

  const page = await getData(getQuery());

  if (page.length === 0) {
    return null;
  }

  return (
    <>
      <IntroBanner data={page[0].attributes.intro} params={params} />
      <Search />
      {page[0].attributes.services_sub?.data && (
        <Services data={page[0].attributes.services_sub?.data} isPage={true} />
      )}
      {page[0].attributes.prices?.data && <PriceList />}
      <OurService />
      <FAQ />
      <TextBlock content={page[0].attributes.text} />
    </>
  );
}
