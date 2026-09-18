const WMO_CODE = {
  0: {
    label: "Clear Sky",
    condition: "Clear",
    description: "Clear sky",
    icon: "☀️",
  },

  1: {
    label: "Mainly Clear",
    condition: "Clear",
    description: "Mainly clear",
    icon: "🌤️",
  },

  2: {
    label: "Partly Cloudy",
    condition: "Cloudy",
    description: "Partly cloudy",
    icon: "⛅",
  },

  3: {
    label: "Overcast",
    condition: "Cloudy",
    description: "Overcast",
    icon: "☁️",
  },

  45: {
    label: "Fog",
    condition: "Fog",
    description: "Foggy",
    icon: "🌫️",
  },

  48: {
    label: "Rime Fog",
    condition: "Fog",
    description: "Depositing rime fog",
    icon: "🌫️",
  },

  51: {
    label: "Light Drizzle",
    condition: "Drizzle",
    description: "Light drizzle",
    icon: "🌦️",
  },

  53: {
    label: "Moderate Drizzle",
    condition: "Drizzle",
    description: "Moderate drizzle",
    icon: "🌦️",
  },

  55: {
    label: "Heavy Drizzle",
    condition: "Drizzle",
    description: "Dense drizzle",
    icon: "🌧️",
  },

  56: {
    label: "Light Freezing Drizzle",
    condition: "Freezing Drizzle",
    description: "Light freezing drizzle",
    icon: "🌧️",
  },

  57: {
    label: "Heavy Freezing Drizzle",
    condition: "Freezing Drizzle",
    description: "Dense freezing drizzle",
    icon: "🌧️",
  },

  61: {
    label: "Light Rain",
    condition: "Rain",
    description: "Slight rain",
    icon: "🌦️",
  },

  63: {
    label: "Moderate Rain",
    condition: "Rain",
    description: "Moderate rain",
    icon: "🌧️",
  },

  65: {
    label: "Heavy Rain",
    condition: "Rain",
    description: "Heavy rain",
    icon: "🌧️",
  },

  66: {
    label: "Light Freezing Rain",
    condition: "Freezing Rain",
    description: "Light freezing rain",
    icon: "🌧️",
  },

  67: {
    label: "Heavy Freezing Rain",
    condition: "Freezing Rain",
    description: "Heavy freezing rain",
    icon: "🌧️",
  },

  71: {
    label: "Light Snow",
    condition: "Snow",
    description: "Slight snow fall",
    icon: "🌨️",
  },

  73: {
    label: "Moderate Snow",
    condition: "Snow",
    description: "Moderate snow fall",
    icon: "🌨️",
  },

  75: {
    label: "Heavy Snow",
    condition: "Snow",
    description: "Heavy snow fall",
    icon: "❄️",
  },

  77: {
    label: "Snow Grains",
    condition: "Snow",
    description: "Snow grains",
    icon: "❄️",
  },

  80: {
    label: "Light Rain Showers",
    condition: "Rain Showers",
    description: "Slight rain showers",
    icon: "🌦️",
  },

  81: {
    label: "Moderate Rain Showers",
    condition: "Rain Showers",
    description: "Moderate rain showers",
    icon: "🌧️",
  },

  82: {
    label: "Heavy Rain Showers",
    condition: "Rain Showers",
    description: "Violent rain showers",
    icon: "⛈️",
  },

  85: {
    label: "Light Snow Showers",
    condition: "Snow Showers",
    description: "Slight snow showers",
    icon: "🌨️",
  },

  86: {
    label: "Heavy Snow Showers",
    condition: "Snow Showers",
    description: "Heavy snow showers",
    icon: "❄️",
  },

  95: {
    label: "Thunderstorm",
    condition: "Thunderstorm",
    description: "Thunderstorm",
    icon: "⛈️",
  },

  96: {
    label: "Thunderstorm with Hail",
    condition: "Thunderstorm",
    description: "Thunderstorm with slight hail",
    icon: "⛈️",
  },

  99: {
    label: "Thunderstorm with Heavy Hail",
    condition: "Thunderstorm",
    description: "Thunderstorm with heavy hail",
    icon: "⛈️",
  },
};

export const getWeather = async (place) => {
  const { name, lat, log } = place;

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${log}&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_gusts_10m`;

  const result = await fetch(url);

  const data = await result.json();

  const now = data.current;
  if (!now) {
    throw new Error("Weather Details get failed");
  }

  const weather = WMO_CODE[now.weather_code];

  return {
    name: name,
    temperature: Math.round(now.temperature_2m),
    humidity: now.relative_humidity_2m,
    windSpeed: Math.round(now.wind_speed_10m),
    feelsLike: Math.round(now.apparent_temperature),
    is_day: now.is_day,
    condition: weather.condition,
    description: weather.description,
    conditionLabel: weather.label,
    icon: weather.icon,
  };
};
