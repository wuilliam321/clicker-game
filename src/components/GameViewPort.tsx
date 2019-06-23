import React, { useState } from 'react';
import CreatePlayer from './CreatePlayer';
import GameContainer from './GameContainer';

const GameViewPort: React.FC = () => {
  const [player, setPlayer] = useState({name: 'Pepe', score: 0})
  // let content
  
  // if (player.name) {
  //   content = <GameContainer /> 
  // } else {
  //   content = <CreatePlayer {...player} />
  // }
  
  return (
    <div className="Game-viewport">
      <CreatePlayer {...player} />
      <GameContainer /> 
    </div>
  );
}

export default GameViewPort;