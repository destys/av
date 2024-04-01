import FAQ from "@/components/faq/FAQ";
import IntroBanner from "@/components/intro/IntroBanner";
import OurService from "@/components/our-service/OurService";
import { SERVICES } from "./services.data";
import Search from "@/components/search/Search";
import Services from "@/components/services/Services";
import TextBlock from "@/components/text-block/TextBlock";
import getServicesMain from "../../actions/GetServicesMain";

export default async function ServicesPage({ params }) {
  /* console.log("params: ", params);
  const page = await getServicesMain("services-main?filters[slug][eq]="); */
  return (
    <>
      <IntroBanner
        image={"car-gear-inside.png"}
        imageWidth={511}
        imageHeight={397}
      />
      <Search />
      <Services data={SERVICES} isPage={true} />
      <OurService />
      <FAQ />
      <TextBlock />
    </>
  );
}
