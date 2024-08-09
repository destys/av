import getData from "@/actions/GetData";
import { getServicesQuery, getCarQuery } from "@/utils/getQueryUtils";

import IntroSmall from "@/components/intro-small/IntroSmall";
import Models from "@/components/models/Models";
import Search from "@/components/search/Search";
import Calculate from "@/components/calculate/Calculate";
import Services from "@/components/services/Services";
import TextBlock from "@/components/text-block/TextBlock";
import FAQ from "@/components/faq/FAQ";
import NotFoundPage from "@/app/not-found";
import { generatePageTitle } from "@/utils/carTitleUtils";
import PriceList from "@/components/price-list/PriceList";
import { extractDataFromParams } from "@/utils/extractDataFromParams";

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
  console.log('queryCars: ', queryCars);

  const pageCar = await getData(queryCars);
  if (!pageCar.length) {
    return <NotFoundPage />;
  }

  const pageService = await getData(queryServices);

  const services = await getData(
    "services-main?populate=deep&pagination[pageSize]=2000"
  );

  const pageTitle = generatePageTitle(pageService, pageCar);

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
          params={params}
        />
      )}

      {!!pageCar[0].attributes.car_models?.data.length && (
        <Models
          data={pageCar[0].attributes.car_models.data}
          params={params.car}
        />
      )}

      <Search />
      {!!pageService.length ? (
        !!!pageService[0]?.attributes?.service_type?.data?.attributes
          ?.service_main && (
          <Services
            data={
              pageService[0].attributes?.services_sub?.data.filter(
                (service) => {
                  // Получаем массив equipment_types для текущего сервиса
                  const serviceEquipmentTypes =
                    service.attributes.equipment_types?.data || [];

                  // Получаем массив equipment_types для pageCar
                  const pageCarEquipmentTypes =
                    pageCar[0]?.attributes?.equipment_types?.data || [];

                  // Проверяем, включает ли serviceEquipmentTypes хотя бы один элемент из pageCarEquipmentTypes
                  return serviceEquipmentTypes.some((serviceType) =>
                    pageCarEquipmentTypes.some(
                      (carType) => carType.id === serviceType.id
                    )
                  );
                }
              ) || []
            }
            isPage={true}
            params={params}
          />
        )
      ) : (
        <Services params={params} data={services} isPage={true} />
      )}
      {!!pageService[0]?.attributes?.service_type?.data?.attributes
        ?.service_main && <PriceList />}

      <Calculate />
      {!!pageService[0]?.attributes.service_types && (
        <Services
          title="Другие услуги для Audi"
          data={pageService[0]?.attributes.service_types?.data}
        />
      )}

      <TextBlock content={pageCar[0].attributes.text_blocks} params={params} />
      {!!pageCar[0].attributes?.faq?.data && (
        <FAQ data={pageCar[0].attributes?.faq?.data} params={params} />
      )}
    </>
  );
}
