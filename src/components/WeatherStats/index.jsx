import "./style.css";

function WeatherStats({ current }) {
  const stats = [
    {
      icon: "🌡️",
      label: "Feels like",
      value: `${Math.round(current.feelsLike)}°C`,
    },
    { icon: "💧", label: "Humidity", value: `${current.humidity}%` },
    { icon: "💨", label: "Wind", value: `${current.windSpeed} m/s` },
  ];

  return (
    <section className="weather-stats">
      {stats.map((stat) => (
        <div className="weather-stats__item" key={stat.label}>
          <span className="weather-stats__icon" aria-hidden="true">
            {stat.icon}
          </span>
          <p className="weather-stats__label">{stat.label}</p>
          <p className="weather-stats__value">{stat.value}</p>
        </div>
      ))}
    </section>
  );
}

export default WeatherStats;
