const express = require("express");

const router = express.Router();

const mealController = require("../controllers/mealController");

router.get("/search", mealController.searchMeal);
router.get("/random", mealController.randomMeal);
router.get("/categories", mealController.categories);
router.get("/:id", mealController.mealDetails);

module.exports = router;