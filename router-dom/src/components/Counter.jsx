import React, { useState } from 'react'

const Counter = () => {
    const [count , setCount] = useState(0);

    const increment = ()=>
    {
        setCount(count+1);
    };

    const decrement =() =>
    {
        setCount(count-1);
    }
  return (
    <div>
        <button onClick={addValue} >Increment +</button>
        <h2>Count:0</h2>
        <button onClick = {subValue}>Decrement -</button>
    </div>
  )
}

export default Counter