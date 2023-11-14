// PlayerCard.js
import React from 'react';

function PlayerCard({ player }) {
  return (
    <div>
      <img src={player.avatar} alt="" />
      <h2>{player.username}</h2>
      {player.is_streamer ? 
        <a href={player.twitch_url}>twitch</a> :
        ''
      }
    </div>
  );
}

export default PlayerCard;
