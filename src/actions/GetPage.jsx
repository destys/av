import axios from "axios";

const URL = process.env.API_URL;
export default async function getPage(slug, populate) {
  try {
    const response = await fetch(
      `${URL}/api/${slug}?pagination[page]=1&pagination[pageSize]=250&populate=${
        populate || "deep"
      }`,
      {
        method: "GET",
        next: { revalidate: 10 },
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HTTP error ${response.status}: ${errorData.message}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    throw error;
  }
}
