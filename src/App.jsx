import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherBackground from "./components/WeatherBackground";
import { getWeatherByCoords } from "./services/weatherAPI";

function App() {
  const [selectedLocation, setSelectedLocation] = useState({
    name: "New York",
    lat: 40.7128,
    lon: -74.006,
  });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeatherByCoords(
        selectedLocation.lat,
        selectedLocation.lon
      );
      setWeather(data);
    };
    fetchWeather();
  }, [selectedLocation]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <WeatherBackground weather={weather} />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Centered overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10 px-4">
        <SearchBar setSelectedLocation={setSelectedLocation} />
        {weather ? (
          <WeatherCard weather={weather} />
        ) : (
          <p className="text-white text-lg">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
