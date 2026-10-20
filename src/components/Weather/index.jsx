import { useState } from "react";
import SearchForm from "../SearchForm";
import WeatherCard from "../WeatherCard";
import WeatherStats from "../WeatherStats";
import Forecast from "../Forecast";
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
      setWeather(await getWeatherByCity(city));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="weather">
      <section className="hero">
        <div className="container hero__inner">
          <h1 className="hero__title">Check the weather anywhere</h1>
          <p className="hero__subtitle">
            Search for a city to see current conditions and the 7-day forecast.
          </p>

          <SearchForm onSearch={handleSearch} loading={loading} />

          {loading && <p className="hero__status">Loading...</p>}
          {error && <p className="hero__status hero__status--error">{error}</p>}
        </div>
      </section>

      {weather && (
        <div className="container weather__results">
          <WeatherCard place={weather.place} current={weather.current} />
          <WeatherStats current={weather.current} />
          <Forecast days={weather.daily} />
        </div>
      )}
    </main>
  );
}

export default Weather;
