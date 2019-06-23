import React, { useState } from 'react';
import CreatePlayer from './CreatePlayer';
import GameContainer from './GameContainer';

interface GameViewPortProps {
  name: string
  score: number
  setPlayerNameHandler: (name: string) => void
}

const GameViewPort: React.FC<GameViewPortProps> = ({name, score, setPlayerNameHandler}) => {
  let content
  
  if (name) {
    content = <GameContainer name={name} score={score} /> 
  } else {
    content = <CreatePlayer setPlayerNameHandler={setPlayerNameHandler} />
  }
  
  return (
    <div className="Game-viewport">
      {content}
    </div>
  );
}

export default GameViewPort;