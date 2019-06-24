import React, { useState } from "react";
import "./ClickerGame.scss";
import GameViewPort from "./components/GameViewPort";
import GameProps from "./interfaces/GameProps";
import Player from "./interfaces/Player";
import { WinnerScore } from "./shared/constants";

const ClickerGame: React.FC = () => {
  const initialValue: Player = { name: "", score: 0, won: false };
  const [player, setPlayer] = useState(initialValue);

  const setPlayerName = (name: string) => {
    setPlayer(prevState => ({ ...prevState, name: name }));
  };

  const setPlayerScore = () => {
    setPlayer(prevState => {
      const canContinue = prevState.score < WinnerScore;
      const newScore = canContinue ? prevState.score + 1 : WinnerScore;
      const isWinner = !canContinue;
      return { ...prevState, score: newScore, won: isWinner };
    });
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
      <pre>player won?: {player.won ? "Winner" : "Not yet"}</pre>
    </div>
  );
};

export default ClickerGame;
