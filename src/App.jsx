import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherBackground from "./components/WeatherBackground";
import { getWeatherByCity } from "./services/weatherAPI";

function App() {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherByCity(city);
        if (data?.cod === "404") {
          setWeather(null);
          setError("City not found");
        } else {
          setWeather(data);
          setError("");
        }
      } catch (err) {
        setWeather(null);
        setError("Something went wrong");
      }
    };
    fetchWeather();
  }, [city]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <WeatherBackground weather={weather} />

      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10 px-4">
        <SearchBar onSearch={setCity} />
        {error && <p className="text-red-400 text-lg">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
        {!weather && !error && <p className="text-white text-lg">Loading...</p>}
      </div>
    </div>
  );
}

export default App;
