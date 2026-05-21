export default function CategoryList({
  categories,
  onSelectCategory,
}) {
  return (
    <div className="category-container">
      <h2>Categories</h2>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.idCategory}
            onClick={() =>
              onSelectCategory(
                category.strCategory
              )
            }
          >
            {category.strCategory}
          </button>
        ))}
      </div>
    </div>
  );
}