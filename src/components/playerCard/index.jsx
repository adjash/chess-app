// PlayerCard.js
import React from 'react';

function PlayerCard({ player }) {
  return (
    <div>
      <img src={player.avatar} alt="" />
      <h2>{player.username}</h2>
    </div>
  );
}

export default PlayerCard;
