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

  const weatherRes = await fetch(
    `${FORECAST_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true&wind_speed_unit=ms`,
    );
  if (!weatherRes.ok) throw new Error("Weather request failed");

  const weatherData = await weatherRes.json();

  return {
    place: country ? `${name}, ${country}` : name,
    temperature: weatherData.current_weather.temperature,
    windspeed: weatherData.current_weather.windspeed,
  };
}
