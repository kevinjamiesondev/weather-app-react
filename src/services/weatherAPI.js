export const getWeatherByCity = async (city) => {
  try {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // Vite .env
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
