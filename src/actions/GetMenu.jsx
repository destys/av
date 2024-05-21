const URL = process.env.API_URL;

export default async function getMenu(query) {
  try {
    const response = await fetch(`${URL}/api/${query}?populate=deep`, {
      method: "GET",
      next: { revalidate: 10 },
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data.attributes.menu;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    throw error;
  }
}
