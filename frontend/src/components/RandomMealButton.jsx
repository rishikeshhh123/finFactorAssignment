export default function RandomMealButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="random-btn"
    >
      I'm Feeling Hungry
    </button>
  );
}