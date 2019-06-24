import React from "react";
import ActionsProps from "../interfaces/ActionsProps";
import ClickerProps from "../interfaces/ClickerProps";
import GameProps from "../interfaces/GameProps";
import Actions from "./Actions";
import Clicker from "./Clicker";
import Feedback from "./Feedback";
import "./GameContainer.scss";

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
      <p>Let's play. Click on red button like a crazy, or click "Restart" to play again</p>
      <Feedback score={score} />
      <Clicker {...clickerProps} />
      <Actions {...actionsProps} />
    </div>
  );
};

export default GameContainer;
