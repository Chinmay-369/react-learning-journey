import React, { useState, useRef } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <>
      <div>StopWatch ⏱ </div>
      <br />
      <h4>{time} Seconds...</h4>
      <button className="btn" onClick={startTimer}>
        Start
      </button>
      <br />
      <button className="btn" onClick={stopTimer}>
        Stop
      </button>
      <br />
      <button className="btn" onClick={resetTimer}>
        Reset
      </button>
    </>
  );
};

export default StopWatch;
