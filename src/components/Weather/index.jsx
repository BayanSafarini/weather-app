import { useState } from "react";
import SearchForm from "../SearchForm";
import WeatherCard from "../WeatherCard";
import { getWeatherByCity } from "../../services/weatherApi";
import "./style.css";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch(city) {
    setWeather(null);
    setError(null);

    if (!city) {
      setError("Please enter a city");
      return;
    }

    setLoading(true);
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="weather">
      <h1 className="weather__title">Weather App</h1>
      <SearchForm onSearch={handleSearch} loading={loading} />

      {loading && <p>Loading...</p>}
      {error && <p className="weather__error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default Weather;
