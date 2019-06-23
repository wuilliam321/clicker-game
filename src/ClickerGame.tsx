import React, { useState } from 'react';
import './ClickerGame.scss';
import GameViewPort from './components/GameViewPort';
import Player from './interfaces/Player';

const ClickerGame: React.FC = () => {
  const initialValue: Player = {name: '', score: 0}
  const [player, setPlayer] = useState(initialValue)
  
  const setPlayerName = (name: string) => {
    setPlayer(prevState => ({...prevState, name: name}))
  }

  return (
    <div className="ClickerGame">
      <GameViewPort {...player} setPlayerNameHandler={setPlayerName} />
    </div>
  );
}

export default ClickerGame;
