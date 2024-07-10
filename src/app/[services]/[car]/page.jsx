import { pathToRegexp } from "path-to-regexp";

import getData from "@/actions/GetData";
import { getServicesQuery, getCarQuery } from "@/utils/getQueryUtils";

import IntroSmall from "@/components/intro-small/IntroSmall";
import Models from "@/components/models/Models";
import Search from "@/components/search/Search";
import PriceList from "@/components/price-list/PriceList";
import Calculate from "@/components/calculate/Calculate";
import Services from "@/components/services/Services";
import TextBlock from "@/components/text-block/TextBlock";
import FAQ from "@/components/faq/FAQ";
import NotFoundPage from "@/app/not-found";

export async function generateMetadata({ params }) {
  const query = getCarQuery(params.car);
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

export default async function CarPage({ params }) {
  const queryServices = getServicesQuery(params.services);
  const queryCars = getCarQuery(params.car);

  const pageCar = await getData(queryCars);

  if (!pageCar.length) {
    return <NotFoundPage />;
  }

  const pageService = await getData(queryServices);

  const serviceTitle =
    pageService[0]?.attributes?.intro?.h1 ||
    pageService[0]?.attributes?.title ||
    "";

  const carTitle = pageCar[0]?.attributes.car_model?.data
    ? pageCar[0]?.attributes.car_model?.data.attributes.car_brand.data
        ?.attributes.title +
      " " +
      pageCar[0]?.attributes.car_model.data.attributes.intro?.h1 +
      " " +
      pageCar[0]?.attributes.intro.h1
    : pageCar[0]?.attributes.car_brand?.data
    ? pageCar[0]?.attributes.car_brand?.data.attributes.intro?.h1 +
      " " +
      pageCar[0]?.attributes.intro.h1
    : pageCar[0]?.attributes.intro.h1;

  const pageTitle = `${serviceTitle || ""} ${carTitle || ""}`;

  return (
    <>
      {!!pageCar[0].attributes.intro && (
        <IntroSmall
          image={`${pageCar[0]?.attributes?.intro.image.data?.attributes.formats.small.url}`}
          title={pageTitle}
          description={pageCar[0].attributes.intro.description}
          data={pageCar[0]?.attributes.intro}
          parentData={pageService[0]?.attributes.intro}
          isShowAdditional={true}
        />
      )}

      {pageCar[0].attributes.car_models?.data && (
        <Models
          data={pageCar[0].attributes.car_models.data}
          params={params.car}
        />
      )}

      <Search />
      <PriceList />
      <Calculate />
      {!!pageCar[0]?.attributes.service_types && (
        <Services
          title="Другие услуги для Audi"
          data={pageCar[0]?.attributes.service_types?.data}
        />
      )}

      <TextBlock content={pageCar[0].attributes.text_blocks} />
      <FAQ />
    </>
  );
}
