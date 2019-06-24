import React, { useState } from "react";
import "./ClickerGame.scss";
import GameViewPort from "./components/GameViewPort";
import Player from "./interfaces/Player";
import GameProps from "./interfaces/GameProps";
import { WinnerScore } from "./shared/constants";

const ClickerGame: React.FC = () => {
  const initialValue: Player = { name: "", score: 0, won: false };
  const [player, setPlayer] = useState(initialValue);

  const setPlayerName = (name: string) => {
    setPlayer(prevState => ({ ...prevState, name: name }));
  };

  const setPlayerScore = () => {
    setPlayer(prevState => {
      const newScore =
        prevState.score < WinnerScore ? prevState.score + 1 : WinnerScore;
      return { ...prevState, score: newScore };
    });
  };

  const setPlayerWon = () => {
    setPlayer(prevState => ({ ...prevState, score: 0, won: true }));
  };

  const gameProps: GameProps = {
    name: player.name,
    score: player.score,
    setPlayerNameHandler: setPlayerName,
    setPlayerScoreHandler: setPlayerScore,
    setPlayerWonHandler: setPlayerWon
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
