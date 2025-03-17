import { getServicesQuery } from "@/utils/getQueryUtils";

import FAQ from "@/components/faq/FAQ";
import IntroBanner from "@/components/intro/IntroBanner";
import OurService from "@/components/our-service/OurService";
import Search from "@/components/search/Search";
import SubServices from "@/components/sub-services/SubServices";
import TextBlock from "@/components/text-block/TextBlock";
import PriceList from "@/components/price-list/PriceList";
import NotFoundPage from "../not-found";
import getData from "@/actions/GetData";
import { replaceVariablesInText } from "@/utils/extractDataFromParams";

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

export default async function ServicePage({ params }) {
  const query = getServicesQuery(params.services);
  const page = await getData(query);

  if (page.length === 0) {
    return <NotFoundPage />;
  }

  const textBlocks = page.length
    ? await replaceVariablesInText(page[0].attributes?.text_blocks, params)
    : "";

  return (
    <>
      <IntroBanner
        data={page[0].attributes?.intro}
        params={params}
        equipmentTypes={page[0].attributes.equipment_types?.data}
      />
      <Search />
      {!!page[0].attributes.services_sub?.data?.length && (
        <SubServices
          data={page[0].attributes?.services_sub?.data}
          isPage={true}
          title={page[0].attributes.subservices_title}
          description={page[0].attributes.subservices_text}
        />
      )}
      {page[0].attributes.pricelist?.prices.length && (
        <PriceList data={page[0].attributes.pricelist} params={params} />
      )}
      <OurService />
      {page[0].attributes.faq?.data && (
        <FAQ data={page[0]?.attributes?.faq?.data} params={params} />
      )}
      <TextBlock content={textBlocks} params={params} />
    </>
  );
}
