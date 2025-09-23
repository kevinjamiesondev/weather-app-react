import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherBackground from "./components/WeatherBackground";
import { getWeatherByCity } from "./services/weatherAPI";

function App() {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      const data = await getWeatherByCity(city);

      if (data && data.error) {
        setError(data.error);
        setWeather(null);
      } else {
        setWeather(data);
      }

      setLoading(false);
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="relative min-h-screen">
      <WeatherBackground weather={weather} />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <SearchBar onSearch={setCity} />

        {loading && <p className="text-white mt-4 text-lg">Loading...</p>}

        {error && <p className="text-red-500 mt-4 text-lg">{error}</p>}

        {weather && !error && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
