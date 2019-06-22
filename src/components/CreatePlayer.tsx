import React from 'react';
const CreatePlayer: React.FC = () => {
  return (
    <div className="Game-create-player">
        <h1>What's your name</h1>
        <label htmlFor="name">
            Your name:
            <input type="text" name="name" id="name" placeholder="Guess" />
        </label>
    </div>
  );
}

export default CreatePlayer;