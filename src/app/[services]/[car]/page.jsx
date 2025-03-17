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
import { replaceVariablesInText } from "@/utils/extractDataFromParams";

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
  const services = await getData(
    "services-main?populate=deep&pagination[pageSize]=2000"
  );

  const pageTitle = generatePageTitle(pageService, pageCar);

  // Получаем текстовые блоки и заменяем переменные
  const textBlocks = pageService.length
    ? await replaceVariablesInText(
        pageService[0].attributes.text_blocks,
        params
      )
    : pageCar[0].attributes.text_blocks;

  const introDescription = await replaceVariablesInText(
    pageService[0]?.attributes.intro?.description ||
      pageCar[0].attributes.intro.description
  );

  return (
    <>
      {!!pageCar[0].attributes.intro && (
        <IntroSmall
          image={`${pageCar[0]?.attributes?.intro.image.data?.attributes.formats.small.url}`}
          title={pageTitle}
          description={introDescription}
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

      {!!pageCar[0].attributes.car_generations?.data.length && (
        <Models
          data={pageCar[0].attributes.car_generations.data}
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
                  const serviceEquipmentTypes =
                    service.attributes.equipment_types?.data || [];
                  const pageCarEquipmentTypes =
                    pageCar[0]?.attributes?.equipment_types?.data || [];

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
        ?.service_main && <PriceList params={params} />}

      <Calculate />
      {!!pageService[0]?.attributes.service_types && (
        <Services
          title="Другие услуги для Audi"
          data={pageService[0]?.attributes.service_types?.data}
        />
      )}

      <TextBlock
        content={textBlocks} // Передаем результат после замены переменных
        params={params}
      />
      {!!pageCar[0].attributes?.faq?.data && (
        <FAQ data={pageCar[0].attributes?.faq?.data} params={params} />
      )}
    </>
  );
}
