import { pathToRegexp } from "path-to-regexp";

import getServicesMain from "@/actions/GetData";

import IntroSmall from "@/components/intro-small/IntroSmall";
import Models from "@/components/models/Models";
import Search from "@/components/search/Search";
import PriceList from "@/components/price-list/PriceList";
import Calculate from "@/components/calculate/Calculate";
import Services from "@/components/services/Services";
import TextBlock from "@/components/text-block/TextBlock";
import FAQ from "@/components/faq/FAQ";

export default async function CarPage({ params }) {
  const regexpServices = pathToRegexp("/:attr1?{_:attr2}?{_:attr3}?").exec(
    `/${params.services}`
  );
  const regexpCar = pathToRegexp("/:attr1?{_:attr2}?{_:attr3}").exec(
    `/${params.car}`
  );

  const getCarQuery = () => {
    if (regexpCar[3]) {
      return `car-generations?populate=deep&filters[slug][$eq]=${regexpCar[3]}`;
    }
    if (regexpCar[2]) {
      return `car-models?populate=deep&filters[slug][$eq]=${regexpCar[2]}`;
    }
    if (regexpCar[1]) {
      return `car-brands?populate=deep&filters[slug][$eq]=${regexpCar[1]}`;
    }

    return null;
  };

  const getServiceQuery = () => {
    const queries = {
      1: `services-main`,
      2: `service-types`,
      3: `services-sub`,
    };

    if (regexpServices[3]) {
      return `${queries[3]}?populate=deep&filters[slug][$eq]=${regexpServices[3]}`;
    }

    if (regexpServices[2]) {
      return `${queries[2]}?populate=deep&filters[slug][$eq]=${regexpServices[2]}`;
    }

    if (regexpServices[1]) {
      return `${queries[1]}?populate=deep&filters[slug][$eq]=${regexpServices[1]}`;
    }

    return null;
  };

  const pageCar = await getServicesMain(getCarQuery());
  if (!pageCar.length) {
    return null;
  }

  const pageService = await getServicesMain(getServiceQuery());

  const serviceTitle = pageService[0]?.attributes?.intro.h1 || "";

  const currentTitle =
    pageCar[0]?.attributes.intro?.h1 || pageCar[0]?.attributes.title;

  const carBrandTitle =
    pageCar[0].attributes.car_brand?.data.attributes.intro?.h1 ||
    pageCar[0].attributes.car_brand?.data.attributes.title;


  const pageTitle = `${serviceTitle || ""} ${
    carBrandTitle || ""
  }  ${currentTitle}`;

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
