// SearchBar.js
import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <input
      placeholder="Search by name or notes"
      onChange={e => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;