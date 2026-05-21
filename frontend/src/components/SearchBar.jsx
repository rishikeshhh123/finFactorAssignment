import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search meals..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
      />

      <button
        onClick={() => onSearch(query)}
      >
        Search
      </button>
    </div>
  );
}