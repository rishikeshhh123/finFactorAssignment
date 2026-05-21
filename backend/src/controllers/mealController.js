const mealService = require("../services/mealService");

exports.searchMeal = async (req, res) => {
  try {
    const data = await mealService.searchMeal(req.query.q);

    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch meals"
    });
  }
};

exports.randomMeal = async (req, res) => {
  try {
    const data = await mealService.randomMeal();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch random meal"
    });
  }
};

exports.categories = async (req, res) => {
  try {
    const data = await mealService.categories();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch categories"
    });
  }
};

exports.mealDetails = async (req, res) => {
  try {
    const data = await mealService.mealDetails(req.params.id);

    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch meal details"
    });
  }
};