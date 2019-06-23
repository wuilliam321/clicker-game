import React, { useState } from "react";
import "./ClickerGame.scss";
import GameViewPort from "./components/GameViewPort";
import Player from "./interfaces/Player";
import GameProps from "./interfaces/GameProps";

const ClickerGame: React.FC = () => {
  const initialValue: Player = { name: "", score: 0 };
  const [player, setPlayer] = useState(initialValue);

  const setPlayerName = (name: string) => {
    setPlayer(prevState => ({ ...prevState, name: name }));
  };

  const setPlayerScore = () => {
    setPlayer(prevState => ({ ...prevState, score: prevState.score + 1 }));
  };

  const gameProps: GameProps = {
    name: player.name,
    score: player.score,
    setPlayerNameHandler: setPlayerName,
    setPlayerScoreHandler: setPlayerScore
  };

  return (
    <div className="ClickerGame">
      <GameViewPort {...gameProps} />
      <pre>player name: {player.name}</pre>
      <pre>player score: {player.score}</pre>
    </div>
  );
};

export default ClickerGame;
