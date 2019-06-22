import React from 'react';
import './ClickerGame.scss';
import GameViewPort from './components/GameViewPort';

const ClickerGame: React.FC = () => {
  return (
    <div className="ClickerGame">
      <GameViewPort/>
    </div>
  );
}

export default ClickerGame;
