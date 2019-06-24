import React, { useState } from "react";
import CreatePlayerProps from "../interfaces/CreatePlayerProps";

const CreatePlayer: React.FC<CreatePlayerProps> = ({
  setPlayerNameHandler
}) => {
  const [name, setName] = useState("");
  const setNameHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  return (
    <div className="Game-create-player">
      <h1>What's your name</h1>
      <label htmlFor="name">
        Your name:
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="Guess"
          onChange={setNameHandler}
        />
        <button id="start-btn" onClick={() => setPlayerNameHandler(name)}>
          Start
        </button>
      </label>
    </div>
  );
};

export default CreatePlayer;
