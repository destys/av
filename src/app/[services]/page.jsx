import getData from "@/actions/GetData";
import { getServicesQuery } from "@/utils/getQueryUtils";

import FAQ from "@/components/faq/FAQ";
import IntroBanner from "@/components/intro/IntroBanner";
import OurService from "@/components/our-service/OurService";
import Search from "@/components/search/Search";
import Services from "@/components/services/Services";
import TextBlock from "@/components/text-block/TextBlock";
import PriceList from "@/components/price-list/PriceList";
import NotFoundPage from "../not-found";

export async function generateMetadata({ params }) {
  const query = getServicesQuery(params.services);
  const page = await getData(query);

  if (page.length === 0) {
    return null;
  }

  return {
    title: page[0].attributes?.SEO?.meta_title || page[0].attributes.title,
    description: page[0].attributes?.SEO?.meta_description,
    canonical: page[0].attributes.title,
  };
}

export default async function ServicesMainPage({ params }) {
  const query = getServicesQuery(params.services);
  const page = await getData(query);

  if (page.length === 0) {
    return <NotFoundPage />;
  }

  return (
    <>
      <IntroBanner data={page[0].attributes?.intro} params={params} />
      <Search />
      {page[0].attributes.services_sub?.data && (
        <Services data={page[0].attributes?.services_sub?.data} isPage={true} />
      )}
      {page[0].attributes.prices?.data && <PriceList />}
      <OurService />
      <FAQ />
      <TextBlock content={page[0].attributes?.text_blocks} />
    </>
  );
}
