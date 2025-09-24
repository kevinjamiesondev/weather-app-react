import React from "react";
import { normalizeWeather } from "../utils/normalizeWeather";
import { weatherIcons } from "../utils/weatherIcons";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const simplified = normalizeWeather(weather);
  const icon = weatherIcons[simplified] || "☀️"; // fallback

  return (
    <div className="bg-white/80 p-8 rounded-xl shadow-xl text-center text-black w-full max-w-lg flex flex-col items-center gap-4">
      <div className="text-6xl">{icon}</div> {/* Big icon */}
      <h2 className="text-3xl font-bold">{weather.name}</h2>
      <p className="text-xl">{simplified}</p>
      <p className="text-2xl font-semibold">
        {Math.round(weather.main.temp)}°C
      </p>
    </div>
  );
};

export default WeatherCard;
