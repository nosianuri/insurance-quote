import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';


function Timer() {
  const [seconds, setSeconds] = useState(120);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(timerRef.current);
      setIsTimeUp(true);
    }
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      {/* <h1>{formatTime(seconds)}</h1> */}
      {isTimeUp && <Confetti />}
    </div>
  );
}

export default Timer