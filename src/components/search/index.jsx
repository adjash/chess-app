// SearchInput.js
import React from 'react';

function SearchInput({ updateSearchTerm, fetchPlayerData }) {
  return (
    <>
      <input
        type="text"
        name="player search input"
        id="player-search-input"
        onChange={(e) => updateSearchTerm(e)}
      />
      <button type="button" onClick={() => fetchPlayerData()}>
        Search
      </button>
    </>
  );
}

export default SearchInput;
