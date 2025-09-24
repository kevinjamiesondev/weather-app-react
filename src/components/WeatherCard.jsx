import React from "react";
import { normalizeWeather } from "../utils/normalizeWeather";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const simplified = normalizeWeather(weather);

  return (
    <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl text-center text-gray-900 max-w-md w-full animate-fadeIn border border-orange-300">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
        {weather.name}
      </h2>
      <p className="text-xl md:text-2xl font-semibold mb-3">{simplified}</p>
      <p className="text-5xl md:text-6xl font-bold mb-5">
        {Math.round(weather.main.temp)}°F
      </p>
      <div className="flex justify-center gap-6 mb-4">
        <p className="text-base md:text-lg font-medium">
          Humidity: {weather.main.humidity}%
        </p>
        <p className="text-base md:text-lg font-medium">
          Wind: {weather.wind.speed} mph
        </p>
      </div>
      <p className="text-orange-500 font-semibold text-sm animate-float">
        Weather updated just now
      </p>
    </div>
  );
};

export default WeatherCard;
