function WeatherBackground({ weather }) {
  let bg = "from-blue-500 to-blue-800"; // default gradient

  if (weather) {
    const condition = weather.weather[0].main.toLowerCase();
    if (condition.includes("cloud")) bg = "from-gray-500 to-gray-800";
    if (condition.includes("rain")) bg = "from-blue-700 to-gray-900";
    if (condition.includes("clear")) bg = "from-yellow-400 to-blue-500";
    if (condition.includes("snow")) bg = "from-blue-200 to-blue-500";
  }

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${bg} transition-all duration-500`}
    />
  );
}

export default WeatherBackground;
