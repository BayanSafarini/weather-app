import "./style.css";

function WeatherCard({ weather }) {
  const { place, temperature, windspeed } = weather;

  return (
    <div className="weather-card">
      <h2 className="weather-card__place">{place}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Wind Speed: {windspeed} m/s</p>
    </div>
  );
}

export default WeatherCard;
