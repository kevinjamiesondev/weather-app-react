import React, { useEffect, useState } from "react";
import { normalizeWeather } from "../utils/normalizeWeather";

const weatherVideoMap = {
  Sunny: "/videos/sunny.mp4",
  Cloudy: "/videos/clouds.mp4",
  Rain: "/videos/rain.mp4",
  Snow: "/videos/snow.mp4",
  Storm: "/videos/storm.mp4",
};

const WeatherBackground = ({ weather }) => {
  const [currentVideo, setCurrentVideo] = useState(weatherVideoMap.Sunny);
  const [prevVideo, setPrevVideo] = useState(null);

  const simplified = weather ? normalizeWeather(weather) : "Sunny";
  const nextVideo = weatherVideoMap[simplified] || weatherVideoMap.Sunny;

  useEffect(() => {
    if (nextVideo !== currentVideo) {
      setPrevVideo(currentVideo);
      setCurrentVideo(nextVideo);

      const timer = setTimeout(() => {
        setPrevVideo(null); // remove previous video after fade
      }, 1000); // fade duration
      return () => clearTimeout(timer);
    }
  }, [nextVideo]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50">
      {prevVideo && (
        <video
          key={prevVideo}
          src={prevVideo}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-100 transition-opacity duration-200"
          style={{ opacity: 0 }}
        />
      )}
      <video
        key={currentVideo}
        src={currentVideo}
        autoPlay
        loop
        muted
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-200 ${
          prevVideo ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default WeatherBackground;
