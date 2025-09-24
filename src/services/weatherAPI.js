export const getWeatherByCoords = async (lat, lon) => {
  try {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
    );
    if (!response.ok) throw new Error("Weather not found");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
