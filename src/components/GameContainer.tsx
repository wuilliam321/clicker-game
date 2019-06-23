import React from "react";
import Feedback from "./Feedback";
import Clicker from "./Clicker";
import Actions from "./Actions";
import GameProps from "../interfaces/GameProps";
import ClickerProps from "../interfaces/ClickerProps";

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
      <Feedback />
      <Clicker {...clickerProps} />
      <Actions />
    </div>
  );
};

export default GameContainer;
