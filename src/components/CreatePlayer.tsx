import React from 'react';
interface Player {
  name: string;
  score: number;
}

const CreatePlayer: React.FC<Player> = ({name, score}) => {
  return (
    <div className="Game-create-player">
        <h1>What's your name {name} / {score}</h1>
        <label htmlFor="name">
            Your name:
            <input type="text" name="name" id="name" placeholder="Guess" />
        </label>
    </div>
  );
}

export default CreatePlayer;