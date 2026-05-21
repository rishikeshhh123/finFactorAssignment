import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/mealApi";

export default function MealDetails() {
  const { id } = useParams();

  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    const response = await API.get(`/${id}`);

    setMeal(response.data.meals[0]);
  };

  if (!meal) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-4">
      <img
        src={meal.strMealThumb}
        className="w-full max-w-md rounded"
      />

      <h1 className="text-3xl font-bold mt-4">
        {meal.strMeal}
      </h1>

      <p className="mt-4">
        {meal.strInstructions}
      </p>

      <iframe
        title="youtube"
        className="w-full h-96 mt-6"
        src={`https://www.youtube.com/embed/${meal.strYoutube?.split("v=")[1]}`}
      />
    </div>
  );
}