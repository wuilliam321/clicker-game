import React from "react";
import ClickerProps from "../interfaces/ClickerProps";

const Clicker: React.FC<ClickerProps> = ({ score, setPlayerScoreHandler }) => {
  const setScoreHandler = () => setPlayerScoreHandler();
  return (
    <div className="Game-clicker">
      <button id="clicker-btn" onClick={setScoreHandler}>
        {score}
      </button>
    </div>
  );
};

export default Clicker;
