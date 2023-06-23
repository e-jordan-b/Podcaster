import React from 'react';
import './SearchBar.css';

function SearchBar({ query, handleChange, podcasts }) {
  const handleInputChange = (event) => {
    handleChange(event.target.value);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()} className="search-bar__form">
      <label htmlFor="search-bar" className="search-bar__podcast-length">{podcasts.length}</label>
      <input
        value={query}
        className="search-bar__input"
        type="text"
        name="query"
        id="search-bar"
        placeholder="Filter Podcasts..."
        onChange={handleInputChange}
      />
    </form>
  );
}

export default SearchBar;
