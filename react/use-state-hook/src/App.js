import React, {useState} from 'react';

// defaults to initial state 0
const Counter = () => {
   const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  return (
      <div>
        <p>Count 1: {firstValue}</p>
        <p>Count 2: {secondValue}</p>
        <button onClick={() => setFirstValue(firstValue + 1)}>+1</button>
        <button onClick={() => setSecondValue(secondValue + 1)}>+1</button>
      </div>
  );
};

export default Counter;