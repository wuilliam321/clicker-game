import React from 'react';
import Player from '../interfaces/Player';

const GameContainer: React.FC<Player> = ({name, score}) => {
  return (
    <div className="Game-game-container">
    <h2>Welcome {name}!</h2>
    </div>
  );
}

export default GameContainer;