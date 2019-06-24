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
      const score = prevState.score + 1;
      const newScore = canContinue ? score : WinnerScore;
      const isWinner = score === WinnerScore;
      return { ...prevState, score: newScore, won: isWinner };
    });
  };

  const resetGame = () => setPlayer(initialValue)

  const gameProps: GameProps = {
    name: player.name,
    score: player.score,
    setPlayerNameHandler: setPlayerName,
    setPlayerScoreHandler: setPlayerScore,
    resetGameHandler: resetGame
  };

  return (
    <div className="ClickerGame">
      <GameViewPort {...gameProps} />
      <pre>player name: {player.name}</pre>
      <pre>player score: {player.score}</pre>
      <pre>game status: {player.won ? "stopped / winner" : "playing"}</pre>
    </div>
  );
};

export default ClickerGame;
