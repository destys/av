import Calculate from "@/components/calculate/Calculate";
import FAQ from "@/components/faq/FAQ";
import IntroBanner from "@/components/intro/IntroBanner";
import OurService from "@/components/our-service/OurService";
import Search from "@/components/search/Search";
import Services from "@/components/services/Services";
import TextBlock from "@/components/text-block/TextBlock";
import getPage from "../actions/GetPage";
import getServicesMain from "../actions/GetServicesMain";

const revalidate = 0;

export default async function Home() {
  const page = await getPage("main-page");
  console.log('page: ', page);
  const services = await getServicesMain("services-main?populate=deep");

  return (
    <>
      <IntroBanner data={page.data.attributes.intro} />
      <Search />
      <Services data={services} />
      <OurService />
      <Calculate />
      <FAQ />
      <TextBlock />
    </>
  );
}
