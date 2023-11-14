// PlayerCard.js
import React from 'react';
import PlayerStats from '../playerStats';

function PlayerCard({ player, stats }) {
  return (
    <div>
      <img src={player.avatar} alt="" />
      <h2>{player.username}</h2>
      {player.is_streamer ? 
        <a href={player.twitch_url}>twitch</a> :
        ''
      }
      <PlayerStats stats={stats}/>
    </div>
  );
}

export default PlayerCard;
