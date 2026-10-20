import { useState } from "react";
import "./style.css";

function SearchForm({ onSearch, loading }) {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(city.trim());
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="search-form__button" type="submit" disabled={loading}>
        Get Weather
      </button>
    </form>
  );
}

export default SearchForm;
