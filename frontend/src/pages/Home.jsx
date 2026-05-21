import { useEffect, useState } from "react";
import "../home.css";
import API from "../api/mealApi";

import SearchBar from "../components/SearchBar";
import MealCard from "../components/MealCard";
import RandomMealButton from "../components/RandomMealButton";
import CategoryList from "../components/CategoryList";
import Navbar from "../components/Navbar";

export default function Home() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await API.get("/categories");

      setCategories(response.data.categories || []);
    } catch (error) {
      console.log(error);
    }
  };

  const searchMeals = async (query) => {
    try {
      const response = await API.get(
        `/search?q=${query}`
      );

      setMeals(response.data.meals || []);
    } catch (error) {
      console.log(error);
    }
  };

  const randomMeal = async () => {
    try {
      const response = await API.get("/random");

      setMeals(response.data.meals || []);
    } catch (error) {
      console.log(error);
    }
  };

  const filterByCategory = async (category) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );

      const data = await response.json();

      setMeals(data.meals || []);
    } catch (error) {
      console.log(error);
    }
  };

 return (
  <>
    <Navbar />

    <div className="home-container">

      <div className="hero-section">
        <h1>TheMealDB Explorer</h1>

        <p>
          Discover delicious recipes from around the world
        </p>
      </div>

      <SearchBar onSearch={searchMeals} />

      <RandomMealButton
        onClick={randomMeal}
      />

      <CategoryList
        categories={categories}
        onSelectCategory={filterByCategory}
      />

      <div className="meal-grid">
        {meals.map((meal) => (
          <MealCard
            key={meal.idMeal}
            meal={meal}
          />
        ))}
      </div>

    </div>
  </>
);
}