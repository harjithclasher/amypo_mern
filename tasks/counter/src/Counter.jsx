import React, { useState } from "react";
import "./App.css";

const Counter = () => {
  const [val, setVal] = useState(0);

  return (
    <div className="body">
      <div className="box">
        <p>Counter</p>
        <p className="val">{val}</p>
      </div>

      <div className="button">
        <button className="add" onClick={() => setVal(val + 1)}>+</button>
        <button className="sub" onClick={() => val > 0 && setVal(val - 1)}>-</button>
      </div>
    </div>
  );
};

export default Counter;
