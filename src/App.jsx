import React, { useState } from 'react';
import './App.css';
import PlayerCard from './components/playerCard';
import SearchInput from './components/search';
import fetchPlayerData from './utils/fetchPlayerData';
import fetchPlayerStats from './utils/fetchPlayerStats';


function App() {
  const [searchInput, setSearchInput] = useState('');
  const [playerData, setPlayerData] = useState(null);
  const [playerStats, setPlayerStats] = useState(null);

  const updateSearchTerm = (e) => {
    setSearchInput(e.target.value);
  }

  const handleFetchPlayerData = async () => {
    try {
      setPlayerData(null);
      const data = await fetchPlayerData(searchInput);
      const stats = await fetchPlayerStats(searchInput);
      await setPlayerData(data);
      await setPlayerStats(stats)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <div className="col-3">
        <SearchInput
          updateSearchTerm={updateSearchTerm}
          fetchPlayerData={handleFetchPlayerData}
        />
      </div>
      <div className="col-7">
        <div className="player-search-results">
          {playerData === null ? (
            'Enter a search term and click Search.'
          ) : playerData.error ? (
            playerData.error
          ) : (
            <PlayerCard player={playerData} stats={playerStats} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
