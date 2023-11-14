// PlayerStats.js
import React from 'react';

function PlayerStats({ stats }) {
  return (
    <div>
      {['bullet', 'blitz', 'rapid'].map((type) => (
        <p key={`${type}-${stats[`chess_${type}`].last.rating}`}>
          {type} - {stats[`chess_${type}`].last.rating}
        </p>
      ))}
    </div>
  );
}

export default PlayerStats;
