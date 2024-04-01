import axios from "axios";

const URL = process.env.API_URL;

export default async function getPage(slug) {
  try {
    const response = await axios.get(`${URL}/api/${slug}?populate=deep`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    return response.data; // Вернуть ответ после успешного выполнения запроса
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    throw error; // Пробросить ошибку для обработки в вызывающем коде, если запрос не удался
  }
}
