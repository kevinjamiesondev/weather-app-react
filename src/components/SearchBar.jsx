import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onSearch(input);
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 w-full max-w-md bg-white/20 p-2 rounded-xl backdrop-blur"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city..."
        className="flex-1 p-2 rounded-lg bg-white/80 text-black focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
