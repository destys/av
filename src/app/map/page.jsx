import getPage from "@/actions/GetPage";
import Link from "next/link";
import React from "react";

export async function generateMetadata() {
    return {
        title: "Карта сайта",
    };
}

const MapPage = async () => {
    const servicesMain = await getPage("services-main");
    return (
        <section className="p-6">
            <div>
                <h2 className="text-2xl font-bold mb-6">Услуги</h2>
                <ul className="space-y-4 pl-4">
                    {servicesMain.map(serviceMain => (
                        <li key={serviceMain.id} className="relative p-2 pl-6 bg-lynch-100">
                            <div className="absolute left-0 top-0 w-3 border-l border-gray-300"></div>
                            <h3 className="text-xl font-semibold mb-2">
                                <Link href={`/${serviceMain.attributes.slug}`}>
                                    {serviceMain.attributes.title}
                                </Link>
                            </h3>

                            <ul className="space-y-4 pl-6 border-l border-gray-300">
                                {serviceMain.attributes.services_sub.data.map(serviceType => (
                                    <li key={serviceType.id} className="relative pl-6">
                                        <div className="absolute left-0 top-0 w-3 border-l border-gray-300"></div>
                                        <h4 className="text-lg font-semibold mb-2">
                                            <Link href={`/${serviceMain.attributes.slug}_${serviceType.attributes.slug}`}>
                                                {serviceType.attributes.title}
                                            </Link>
                                        </h4>

                                        <ul className="space-y-2 pl-6">
                                            {serviceType.attributes.services_sub.data.map(serviceSub => (
                                                <li key={serviceSub.id}>
                                                    <Link href={`/${serviceMain.attributes.slug}_${serviceType.attributes.slug}_${serviceSub.attributes.slug}`}>
                                                        {serviceSub.attributes.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default MapPage