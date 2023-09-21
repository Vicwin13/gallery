// SearchInput.js (Search component)
import React from "react";

function SearchInput({ searchQuery, setSearchQuery }) {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex justify-center gap-1  items-center p-4">
      <input
        className="py-1 rounded shadow pl-2 text-accent md:w-96 w-52"
        type="text"
        value={searchQuery}
        onChange={handleSearch}
      />
      <button
        className="bg-accent rounded py-1 px-3 text-secondary outline-none"
        type="submit">
        Search
      </button>
    </div>
  );
}

export default SearchInput;
