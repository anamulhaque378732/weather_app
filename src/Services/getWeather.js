export const getWeather = async (place) => {
  const { name, lat, log } = place;

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${log}&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_gusts_10m`;

  const result = await fetch(url);

  const data = await result.json();

  const now = data.current;
  if (!now) {
    throw new Error("Weather Details get failed");
  }

  return {
    name: name,
    apparent_temperature: now.apparent_temperature,

    cloud_cover: now.cloud_cover,
    interval: now.interval,

    is_day: now.is_day,

    precipitation: now.precipitation,

    pressure_msl: now.pressure_msl,

    rain: now.rain,

    relative_humidity_2m: now.relative_humidity_2m,

    showers: now.showers,

    snowfall: now.snowfall,

    surface_pressure: now.surface_pressure,

    temperature_2m: now.temperature_2m,

    time: now.time,

    weather_code: now.weather_code,

    wind_direction_10m: now.wind_speed_10m,

    wind_gusts_10m: now.wind_gusts_10m,
  };
};
