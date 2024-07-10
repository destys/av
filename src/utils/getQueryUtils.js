// utils/queryUtils.js
import { pathToRegexp } from "path-to-regexp";

export const getServicesQuery = (params) => {
    const regexp = pathToRegexp("/:attr1?{_:attr2}?{_:attr3}?").exec(`/${params}`);

    const queries = {
        1: `services-main`,
        2: `service-types`,
        3: `services-sub`,
    };

    if (regexp[3]) {
        return `${queries[3]}?populate=deep&filters[slug][$eq]=${regexp[3]}`;
    }

    if (regexp[2]) {
        return `${queries[2]}?populate=deep&filters[slug][$eq]=${regexp[2]}`;
    }

    if (regexp[1]) {
        return `${queries[1]}?populate=deep&filters[slug][$eq]=${regexp[1]}`;
    }

    return null;
};

export const getCarQuery = (params) => {
    const regexp = pathToRegexp("/:attr1?{_:attr2}?{_:attr3}?").exec(`/${params}`);
    const queries = {
        1: `car-brands`,
        2: `car-models`,
        3: `car-generations`,
    };

    if (regexp[3]) {
        return `${queries[3]}?populate=deep&filters[slug][$eq]=${regexp[3]}`;
    }
    if (regexp[2]) {
        return `${queries[2]}?populate=deep&filters[slug][$eq]=${regexp[2]}`;
    }
    if (regexp[1]) {
        return `${queries[1]}?populate=deep&filters[slug][$eq]=${regexp[1]}`;
    }

    return null;
};

