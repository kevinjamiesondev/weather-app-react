import React from "react";
import { normalizeWeather } from "../utils/normalizeWeather";

const WeatherBackground = ({ weather }) => {
  if (!weather) return null;

  const simplified = normalizeWeather(weather);

  let videoSrc = "/videos/sunny.mp4";
  switch (simplified) {
    case "Cloudy":
      videoSrc = "/videos/clouds.mp4";
      break;
    case "Rain":
      videoSrc = "/videos/rain.mp4";
      break;
    case "Snow":
      videoSrc = "/videos/snow.mp4";
      break;
    case "Storm":
      videoSrc = "/videos/storm.mp4";
      break;
    case "Sunny":
    default:
      videoSrc = "/videos/sun.mp4";
  }

  return (
    <video
      className="fixed top-0 left-0 w-full h-full object-cover -z-50"
      src={videoSrc}
      autoPlay
      loop
      muted
    />
  );
};

export default WeatherBackground;
