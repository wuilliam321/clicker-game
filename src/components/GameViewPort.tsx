import React from "react";
import CreatePlayer from "./CreatePlayer";
import GameContainer from "./GameContainer";
import GameProps from "../interfaces/GameProps";

const GameViewPort: React.FC<GameProps> = props => {
  const { name, setPlayerNameHandler } = props;
  let content;

  if (name) {
    content = <GameContainer {...props} />;
  } else {
    content = <CreatePlayer setPlayerNameHandler={setPlayerNameHandler} />;
  }

  return <div className="Game-viewport">{content}</div>;
};

export default GameViewPort;
