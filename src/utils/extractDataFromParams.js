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
        const carModel = attributes.car_model?.data?.attributes;
        const carBrand = carModel?.car_brand?.data;

        if (carBrand) {
            data.AR1 = carBrand.attributes.title;
            data.AR2 = carModel.title;
            data.AR3 = attributes.title;
        } else {
            data.AR2 = carModel?.title;
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
        // Заменяем переменные в строке и возвращаем результат
        return textBlocks.replace(/{(S1|S2|S3|AR1|AR2|AR3)}/g, (match, p1) => {
            const replacement = data[p1];
            if (replacement === null || replacement === undefined) {
                console.warn(`No data found for ${p1}. Using original placeholder.`);
                return match;  // Возвращает оригинальный текст, если данных нет
            }
            return replacement;
        });
    }

    // Если textBlocks является массивом объектов
    if (Array.isArray(textBlocks)) {
        return textBlocks.map(block => {
            // Проверим, что у блока есть поле children
            if (block.children && Array.isArray(block.children)) {
                // Проходим по каждому дочернему элементу
                block.children = block.children.map(child => {
                    if (child.type === 'text' && typeof child.text === 'string') {
                        // Заменяем переменные в тексте
                        child.text = child.text.replace(/{(S1|S2|S3|AR1|AR2|AR3)}/g, (match, p1) => {
                            const replacement = data[p1];
                            if (replacement === null || replacement === undefined) {
                                console.warn(`No data found for ${p1}. Using original placeholder.`);
                                return match;  // Возвращает оригинальный текст, если данных нет
                            }
                            return replacement;
                        });
                    }
                    return child;
                });
            }
            return block;
        });
    }

    // Если формат данных не поддерживается, возвращаем null
    return null;
}