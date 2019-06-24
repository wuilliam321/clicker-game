import React from "react";
import CreatePlayerProps from "../interfaces/CreatePlayerProps";
import GameProps from "../interfaces/GameProps";
import CreatePlayer from "./CreatePlayer";
import GameContainer from "./GameContainer";

const GameViewPort: React.FC<GameProps> = props => {
  const { name, setPlayerNameHandler } = props;
  const createPlayerProps: CreatePlayerProps = {
    setPlayerNameHandler: setPlayerNameHandler
  };
  let content;

  if (name) {
    content = <GameContainer {...props} />;
  } else {
    content = <CreatePlayer {...createPlayerProps} />;
  }

  return <div className="Game-viewport">{content}</div>;
};

export default GameViewPort;
