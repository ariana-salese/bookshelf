import { useState } from 'react';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={count == 0 ? () => setCount(0) : () => setCount(count - 1)}>Sub</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
