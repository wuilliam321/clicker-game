import React from "react";
import "./Clicker.scss";
import ClickerProps from "../interfaces/ClickerProps";
import { WinnerScore } from "../shared/constants";

const Clicker: React.FC<ClickerProps> = ({ score, setPlayerScoreHandler }) => {
  const setScoreHandler = () => setPlayerScoreHandler();
  return (
    <div className="Game-clicker">
      <button
        id="clicker-btn"
        disabled={score === WinnerScore}
        onClick={setScoreHandler}
      >
        {score}
      </button>
    </div>
  );
};

export default Clicker;
