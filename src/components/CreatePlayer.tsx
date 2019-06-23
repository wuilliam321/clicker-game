import React, { useState } from 'react';
interface PlayerProps {
  setPlayerNameHandler: (e: any) => void;
}

const CreatePlayer: React.FC<PlayerProps> = ({setPlayerNameHandler}) => {
  const [name, setName] = useState('')
  const setNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => (setName(e.target.value))
  
  return (
    <div className="Game-create-player">
        <h1>What's your name</h1>
        <label htmlFor="name">
            Your name:
            <input type="text" name="name" id="name" placeholder="Guess" onChange={setNameHandler} />
            <button onClick={() => setPlayerNameHandler(name)}>Start</button>
        </label>
    </div>
  );
}

export default CreatePlayer;