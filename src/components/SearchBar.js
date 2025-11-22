import React from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, input, setInput }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="🔍 Busca un producto por nombre..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-btn">
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;
