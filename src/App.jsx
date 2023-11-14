import React, { useState } from 'react';
import './App.css';
import PlayerCard from './components/playerCard';
import SearchInput from './components/search';
import fetchPlayerData from './utils/fetchPlayerData';


function App() {
  const [searchInput, setSearchInput] = useState('');
  const [playerData, setPlayerData] = useState(null);

  const updateSearchTerm = (e) => {
    setSearchInput(e.target.value);
  }

  const handleFetchPlayerData = async () => {
    try {
      setPlayerData(null);
      const data = await fetchPlayerData(searchInput);
      setPlayerData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SearchInput
        updateSearchTerm={updateSearchTerm}
        fetchPlayerData={handleFetchPlayerData}
      />
      <div className="player-search-results">
        {playerData === null ? (
          'Enter a search term and click Search.'
        ) : playerData.error ? (
          playerData.error
        ) : (
          <PlayerCard player={playerData} />
        )}
      </div>
    </>
  );
}

export default App;
