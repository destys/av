export function generatePageTitle(pageService, pageCar) {
    const getServiceTitle = (service) => {
        const attributes = service[0]?.attributes || {};
        return attributes.intro?.h1 || attributes.title || "";
    };

    const getCarTitle = (car) => {
        const attributes = car[0]?.attributes || {};
        const carModelData = attributes.car_model?.data;
        const carBrandData = carModelData
            ? carModelData.attributes.car_brand.data
            : attributes.car_brand?.data;

        const carBrandTitle = carBrandData?.attributes.title || "";
        const carModelH1 = carModelData?.attributes.intro?.h1 || carModelData?.attributes.title || "";
        const carIntroH1 = attributes.intro?.h1 || attributes.title || "";

        return carBrandTitle
            ? `${carBrandTitle} ${carModelH1} ${carIntroH1}`
            : `${carIntroH1}`;
    };

    const serviceTitle = getServiceTitle(pageService);
    const carTitle = getCarTitle(pageCar);

    return `${serviceTitle} ${carTitle}`.trim();
}
