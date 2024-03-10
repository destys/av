import FAQ from "@/components/faq/FAQ";
import IntroBanner from "@/components/intro/IntroBanner";
import OurService from "@/components/our-service/OurService";
import { SERVICES } from "./services.data";
import Search from "@/components/search/Search";
import Services from "@/components/services/Services";
import TextBlock from "@/components/text-block/TextBlock";

export default function ServicesPage() {
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
