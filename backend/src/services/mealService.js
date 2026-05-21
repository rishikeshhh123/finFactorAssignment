const apiClient = require("../utils/apiClient");
const cache = require("../cache/cache");

const getCachedData = async (key, endpoint) => {
  const cached = cache.get(key);

  if (cached) {
    return cached;
  }

  const response = await apiClient.get(endpoint);

  cache.set(key, response.data);

  return response.data;
};

exports.searchMeal = async (query) => {
  return getCachedData(
    `search_${query}`,
    `/search.php?s=${query}`
  );
};

exports.randomMeal = async () => {
  return getCachedData(
    "random_meal",
    "/random.php"
  );
};

exports.categories = async () => {
  return getCachedData(
    "categories",
    "/categories.php"
  );
};

exports.mealDetails = async (id) => {
  return getCachedData(
    `meal_${id}`,
    `/lookup.php?i=${id}`
  );
};