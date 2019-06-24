import React from "react";
import "./Actions.scss";
import ActionsProps from "../interfaces/ActionsProps";

const Actions: React.FC<ActionsProps> = ({ resetGameHandler }) => {
  return (
    <div className="Game-actions">
      <button id="reset-btn" onClick={resetGameHandler}>
        Restart
      </button>
    </div>
  );
};

export default Actions;
