function WeatherCard({ weather }) {
  return (
    <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center max-w-sm w-full">
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <p className="capitalize text-lg">{weather.weather[0].description}</p>
      <p className="text-5xl font-extrabold mt-2">
        {Math.round(weather.main.temp)}°C
      </p>
      <div className="flex justify-between mt-4 text-sm">
        <p>💧 Humidity: {weather.main.humidity}%</p>
        <p>💨 Wind: {Math.round(weather.wind.speed)} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
