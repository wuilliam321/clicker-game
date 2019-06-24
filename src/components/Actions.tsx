import React from "react";
import ActionsProps from "../interfaces/ActionsProps";

const Actions: React.FC<ActionsProps> = ({ resetGameHandler }) => {
  return (
    <div className="Game-actions">
      <button id="reset-btn" onClick={resetGameHandler}>Reset</button>
    </div>
  );
};

export default Actions;
