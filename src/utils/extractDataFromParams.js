import getData from "@/actions/GetData";
import { getCarQuery, getServicesQuery } from "./getQueryUtils";

/**
 * Функция для обработки данных услуг и автомобилей
 * @param {Object} params - Параметры для запроса данных
 * @returns {Object} - Объект с заполненными данными
 */
export async function extractDataFromParams(params) {
    const data = initializeDataObject();

    if (params?.services) {
        await processServicesData(params.services, data);
    }

    if (params?.car) {
        await processCarData(params.car, data);
    }

    return data;
}

/**
 * Инициализирует объект данных
 * @returns {Object} - Объект данных с начальными значениями
 */
function initializeDataObject() {
    return {
        S1: null,
        S2: null,
        S3: null,
        AR0: null,
        AR1: null,
        AR2: null,
        AR3: null
    };
}

/**
 * Обрабатывает данные услуг
 * @param {string} servicesParam - Параметры услуг
 * @param {Object} data - Объект данных
 */
async function processServicesData(servicesParam, data) {
    const query = getServicesQuery(servicesParam);
    const services = await getData(query);

    if (services.length > 0) {
        const attributes = services[0].attributes;
        const serviceType = attributes.service_type?.data?.attributes;
        const serviceMain = attributes.service_main?.data;
        const serviceSub = attributes.service_sub?.data;

        if (serviceType?.service_main?.data) {
            data.S1 = serviceType.service_main.data.attributes.title;
            data.S2 = serviceType.title;
            data.S3 = attributes.title;
        } else if (serviceMain && serviceSub) {
            data.S1 = serviceMain[0].attributes.title;
            data.S2 = attributes.title;
        } else {
            data.S1 = attributes.title;
        }
    }
}

/**
 * Обрабатывает данные автомобилей
 * @param {string} carParam - Параметры автомобилей
 * @param {Object} data - Объект данных
 */
async function processCarData(carParam, data) {
    const query = getCarQuery(carParam);
    const cars = await getData(query);
    if (cars.length > 0) {
        const attributes = cars[0].attributes;
        
        if (attributes.car_models?.data) {
            data.AR1 = attributes.title;
        } else if (attributes.car_brand?.data) {
            data.AR1 = attributes.car_brand?.data.attributes.title;
            data.AR2 = attributes.title;
        } else {
            data.AR1 = attributes.car_model.data.attributes.car_brand.data.attributes.title;
            data.AR2 = attributes.car_model.data.attributes.title;
            data.AR3 = attributes.title;
        }
    }
}

/**
 * Функция для замены переменных в тексте на данные из объекта
 * @param {string} text - Текст с переменными
 * @param {Object} data - Объект данных
 * @returns {string} - Текст с замененными переменными
 */
export async function replaceVariablesInText(textBlocks, params) {
    if (!textBlocks) return null;

    const data = await extractDataFromParams(params);

    // Проверим, является ли textBlocks строкой
    if (typeof textBlocks === 'string') {
        return textBlocks.replace(/{(S1|S2|S3|AR0|AR1|AR2|AR3)}/g, (match, p1) => {
            const replacement = data[p1];
            return replacement !== null && replacement !== undefined ? replacement : ""; // Убираем плейсхолдер, если данных нет
        });
    }

    // Если textBlocks является массивом объектов
    if (Array.isArray(textBlocks)) {
        return textBlocks.map(block => {
            if (block.children && Array.isArray(block.children)) {
                block.children = block.children.map(child => {
                    if (child.type === 'text' && typeof child.text === 'string') {
                        child.text = child.text.replace(/{(S1|S2|S3|AR1|AR2|AR3)}/g, (match, p1) => {
                            const replacement = data[p1];
                            return replacement !== null && replacement !== undefined ? replacement : ""; // Убираем плейсхолдер, если данных нет
                        });
                    }
                    return child;
                });
            }
            return block;
        });
    }

    return null;
}