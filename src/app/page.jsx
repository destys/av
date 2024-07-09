import Calculate from "@/components/calculate/Calculate";
import FAQ from "@/components/faq/FAQ";
import IntroBanner from "@/components/intro/IntroBanner";
import OurService from "@/components/our-service/OurService";
import Search from "@/components/search/Search";
import Services from "@/components/services/Services";
import TextBlock from "@/components/text-block/TextBlock";

import getPage from "@/actions/GetPage";
import getData from "@/actions/GetData";

export async function generateMetadata({ params, searchParams }, parent) {
  const page = await getPage("main-page");

  return {
    title: page.attributes?.SEO?.meta_title || page.attributes.title,
    description: page.attributes?.SEO?.meta_description,
    canonical: page.attributes.title,
  };
}

export default async function Home() {
  const page = await getPage("main-page");
  const services = await getData(
    "services-main?populate=deep&pagination[pageSize]=2000"
  );

  return (
    <>
      <IntroBanner data={page.attributes.intro} />
      <Search />
      <Services data={services} />
      <OurService /> 
      <Calculate />
      <FAQ />
      <TextBlock content={page.attributes.text_blocks} />
    </>
  );
}
