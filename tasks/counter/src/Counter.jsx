import React, { useState } from 'react'
import './App.css';
const Counter = () => {
    const [val , setVal] = useState (0);
    const addVal =()=>
    {
        setVal(val+1)
    }

    const subVal =()=>
    {
        
        if(val>0)
            setVal(val-1)

    }
  return (
    <div className='body'>
        <div className='box'>
        <p>Counter</p>
        <br/>
        <p className='val'>{val}</p>
        </div>
        <div className='button'>
            <button className='add' onClick={addVal}>+</button>
            <button className='sub' onClick={subVal}>-</button>
        </div>
    </div>
  )
}

export default Counter