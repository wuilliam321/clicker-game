import React, {useState} from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click ({count})</button>
    </div>
  );
}

export default Counter;
