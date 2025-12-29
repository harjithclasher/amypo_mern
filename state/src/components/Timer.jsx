import React, { useEffect, useState } from "react";

const Timer = () => {
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (!running) return;
    let time = setInterval(() => setTimer((prev) => prev + 1), 1000);
    return () => clearInterval(time);
  }, [running]);

  const reset = () => {
    setTimer(0);
    setRunning(false);
  };

  return (
    <div>
      <h4>Timer</h4>
      <p>{timer}</p>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
