import React from "react";
import ClickerProps from "../interfaces/ClickerProps";
import GameProps from "../interfaces/GameProps";
import Actions from "./Actions";
import Clicker from "./Clicker";
import Feedback from "./Feedback";

const GameContainer: React.FC<GameProps> = ({
  name,
  score,
  setPlayerScoreHandler
}) => {
  const clickerProps: ClickerProps = {
    score: score,
    setPlayerScoreHandler: setPlayerScoreHandler
  };
  return (
    <div className="Game-game-container">
      <h2>Welcome {name}!</h2>
      <Feedback score={score} />
      <Clicker {...clickerProps} />
      <Actions />
    </div>
  );
};

export default GameContainer;
