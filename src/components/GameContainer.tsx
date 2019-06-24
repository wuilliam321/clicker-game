import React from "react";
import ClickerProps from "../interfaces/ClickerProps";
import GameProps from "../interfaces/GameProps";
import Actions from "./Actions";
import Clicker from "./Clicker";
import Feedback from "./Feedback";
import ActionsProps from "../interfaces/ActionsProps";

const GameContainer: React.FC<GameProps> = ({
  name,
  score,
  setPlayerScoreHandler,
  resetGameHandler
}) => {
  const clickerProps: ClickerProps = {
    score: score,
    setPlayerScoreHandler: setPlayerScoreHandler
  };
  const actionsProps: ActionsProps = {
    resetGameHandler: resetGameHandler
  };
  return (
    <div className="Game-game-container">
      <h2>Welcome {name}!</h2>
      <Feedback score={score} />
      <Clicker {...clickerProps} />
      <Actions {...actionsProps} />
    </div>
  );
};

export default GameContainer;
