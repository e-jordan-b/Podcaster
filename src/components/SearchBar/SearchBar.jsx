import React from 'react';

function SearchBar({
  query, handleChange, podcasts,
}) {
  const handleInputChange = (event) => {
    handleChange(event.target.value);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="search-bar">{podcasts.length}</label>
      <input
        value={query}
        className="search-input"
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
