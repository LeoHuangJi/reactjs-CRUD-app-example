import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('mounted');
  },[]);

  useEffect(() => {
    console.log('updated');
  });

  const increase = () => {
    setCount(count => count + 1);
  };

  return (
    <div className='Counter'>
      <h1>{count}</h1>
      <button type='button' onClick={increase}>
        Click me
      </button>
    </div>
  );
};

export default Counter;