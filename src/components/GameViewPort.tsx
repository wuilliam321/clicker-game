import React from 'react';
import CreatePlayer from './CreatePlayer';
import GameContainer from './GameContainer';

const GameViewPort: React.FC = () => {
  return (
    <div className="Game-viewport">
      <CreatePlayer />
      <GameContainer/> 
    </div>
  );
}

export default GameViewPort;