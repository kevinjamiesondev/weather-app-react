// services/weatherAPI.js
export const getWeatherByCity = async (city) => {
  try {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    if (!apiKey) throw new Error("API key not found. Check your .env file.");

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Weather API error:", error.message);
    return { error: error.message }; // return an error object
  }
};
