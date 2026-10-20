import { describeWeather } from "../../utils/weatherCodes";
import "./style.css";

function dayName(date, index) {
  if (index === 0) return "Today";
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "short",
  });
}

function Forecast({ days }) {
  return (
    <section className="forecast" id="forecast">
      <h2 className="forecast__title">7-day forecast</h2>

      <div className="forecast__grid">
        {days.map((day, i) => {
          const { label, icon } = describeWeather(day.code);
          return (
            <div className="forecast__day" key={day.date}>
              <p className="forecast__name">{dayName(day.date, i)}</p>
              <span className="forecast__icon" role="img" aria-label={label}>
                {icon}
              </span>
              <p className="forecast__max">{Math.round(day.max)}°</p>
              <p className="forecast__min">{Math.round(day.min)}°</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Forecast;
