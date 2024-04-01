import getServicesMain from "@/actions/GetServicesMain";

import FAQ from "@/components/faq/FAQ";
import IntroBanner from "@/components/intro/IntroBanner";
import OurService from "@/components/our-service/OurService";
import Search from "@/components/search/Search";
import Services from "@/components/services/Services";
import TextBlock from "@/components/text-block/TextBlock";

export default async function ServicesMainPage({ params }) {

  const page = await getServicesMain(
    `services-main?populate=deep&filters[slug][$eq]=${params.serviceMain}`
  );

  return (
    <>
      <IntroBanner data={page[0].attributes.intro} />
      <Search />
      <Services data={page[0].attributes.service_types?.data} isPage={true} />
      <OurService />
      <FAQ />
      <TextBlock />
    </>
  );
}
