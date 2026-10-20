const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeatherByCity(city) {
  const locationRes = await fetch(
    `${GEO_URL}?name=${encodeURIComponent(city)}&count=1`,
  );
  if (!locationRes.ok) throw new Error("Location request failed");

  const locationData = await locationRes.json();
  const place = locationData.results?.[0];
  if (!place) throw new Error("City not found");

  const { latitude, longitude, name, country } = place;

  const params = new URLSearchParams({
    latitude,
    longitude,
    current:
      "temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m",
    daily: "weather_code,temperature_2m_max,temperature_2m_min",
    wind_speed_unit: "ms",
    timezone: "auto",
  });

  const weatherRes = await fetch(`${FORECAST_URL}?${params}`);
  if (!weatherRes.ok) throw new Error("Weather request failed");

  const data = await weatherRes.json();

  return {
    place: country ? `${name}, ${country}` : name,
    current: {
      temperature: data.current.temperature_2m,
      feelsLike: data.current.apparent_temperature,
      humidity: data.current.relative_humidity_2m,
      windSpeed: data.current.wind_speed_10m,
      code: data.current.weather_code,
    },
    daily: data.daily.time.map((date, i) => ({
      date,
      code: data.daily.weather_code[i],
      max: data.daily.temperature_2m_max[i],
      min: data.daily.temperature_2m_min[i],
    })),
  };
}
