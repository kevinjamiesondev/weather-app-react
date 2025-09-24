import React, { useState } from "react";

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length > 1) {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${API_KEY}`
        );
        const data = await res.json();
        setSuggestions(data);
      } catch (err) {
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (city) => {
    onSearch(city);
    setInput(city);
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) onSearch(input);
    setSuggestions([]);
  };

  return (
    <div className="relative w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter city..."
          className="flex-1 p-3 rounded-lg text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white rounded-lg shadow-lg z-20">
          {suggestions.map((s, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSelect(s.name)}
            >
              {s.name}, {s.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
