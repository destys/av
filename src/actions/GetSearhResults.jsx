const getSearchResults = async (searchText) => {
  try {
    const collections = ["services-main", "service-types", "services-sub"];
    const allResults = await Promise.all(
      collections.map(async (collection) => {
        const response = await fetch(
          `${process.env.API_URL}/api/${collection}?populate=deep&filters[$and][0][title][$contains]=${searchText}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        return data.data
          .filter((item) => item.attributes.hidden !== true)
          .map((item) => ({ ...item, collection: collection }));
      })
    );

    return allResults.flat();
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};

export default getSearchResults;
