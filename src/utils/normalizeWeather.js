export const normalizeWeather = (weather) => {
  if (!weather) return "Sunny";

  const main = weather.weather[0].main.toLowerCase();
  const description = weather.weather[0].description.toLowerCase();

  if (main.includes("clear")) return "Sunny";
  if (main.includes("cloud") || description.includes("cloud")) return "Cloudy";
  if (main.includes("rain") || main.includes("drizzle")) return "Rain";
  if (main.includes("snow")) return "Snow";
  if (
    main.includes("thunder") ||
    main.includes("storm") ||
    main.includes("tornado")
  )
    return "Storm";

  return "Sunny";
};
