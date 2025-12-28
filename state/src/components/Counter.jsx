import React, { useState } from 'react'

const Counter = () => {
    const [count , setCount] = useState(0);

    const addValue =()=>
    {
        setCount(count+1);
    };

    const subValue =()=>
    {
        setCount(count-1);
    }
  return (
    <div>
        <button onClick={addValue} >Increment +</button>
        <h2>Count:{count}</h2>
        <button onClick ={subValue}>Decrement -</button>
    </div>
  )
}

export default Counter