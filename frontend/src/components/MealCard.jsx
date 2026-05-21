import { Link } from "react-router-dom";

export default function MealCard({ meal }) {
  return (
    <Link
      to={`/meal/${meal.idMeal}`}
      style={{
        textDecoration: "none",
      }}
    >
      <div className="meal-card">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />

        <h2>{meal.strMeal}</h2>
      </div>
    </Link>
  );
}