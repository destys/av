import axios from "axios";

const URL = process.env.API_URL;
export default async function getUserData(jwt) {
  try {
    const response = await axios.get(`${URL}/api/users/me?populate=role`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });

    return response.data; // Вернуть ответ после успешного выполнения запроса
  } catch (error) {
    console.error("Ошибка при получении данных о пользователе:", error);
    return error; // Пробросить ошибку для обработки в вызывающем коде, если запрос не удался
  }
}
