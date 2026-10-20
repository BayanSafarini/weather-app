import { describeWeather } from "../../utils/weatherCodes";
import "./style.css";

function WeatherCard({ place, current }) {
  const { label, icon } = describeWeather(current.code);

  return (
    <section className="weather-card" id="current">
      <div>
        <p className="weather-card__label">Current weather</p>
        <h2 className="weather-card__place">{place}</h2>
        <p className="weather-card__condition">{label}</p>
      </div>

      <div className="weather-card__temp">
        <span className="weather-card__icon" aria-hidden="true">
          {icon}
        </span>
        <span>{Math.round(current.temperature)}°C</span>
      </div>
    </section>
  );
}

export default WeatherCard;
