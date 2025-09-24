import React, { useState } from "react";

const SearchBar = ({ setSelectedLocation }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setInput(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const res = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`
      );
      const data = await res.json();
      setSuggestions(data);
    } catch (err) {
      console.error(err);
      setSuggestions([]);
    }
  };

  const handleSelect = (location) => {
    setSelectedLocation({
      name: location.name,
      lat: location.lat,
      lon: location.lon,
    });
    setInput(location.name);
    setSuggestions([]);
  };

  const handleSearch = () => {
    if (suggestions.length > 0) handleSelect(suggestions[0]);
  };

  return (
    <div className="w-full max-w-md relative flex">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search city..."
        className="flex-grow p-3 rounded-l-full bg-gray-200 text-gray-900 font-semibold placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
      />
      <button
        onClick={handleSearch}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 rounded-r-full transition transform hover:scale-105 hover:shadow-lg duration-200"
      >
        Search
      </button>

      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 z-20 w-full mt-1 bg-white text-gray-900 rounded-lg max-h-60 overflow-y-auto shadow-lg">
          {suggestions.map((s, i) => (
            <li
              key={i}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSelect(s)}
            >
              {s.name}
              {s.state ? `, ${s.state}` : ""}, {s.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
