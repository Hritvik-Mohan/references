import { useEffect, useState } from "react";
import './Stopwatch.css'

export default function Stopwatch() {

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      let intervalId;
      if (isActive) {
        intervalId = setInterval(() => {
          setSeconds((seconds) => seconds + 1);
        }, 100);
      }
      return () => {
        clearInterval(intervalId);
      };
    }, [isActive])
  
  
    function handleStart() {
      setIsActive(true);
    }
  
    function handlePause() {
      setIsActive(false);
    }
  
    function handleReset() {
      setIsActive(false);
      setSeconds(0);
    }
  
    return (
      <div className="stopwatch-container">
        <h1>{seconds}</h1>
        <div className="stopwatch-buttons">
            <button onClick={handleStart} className="counter-button">Start</button>
            <button onClick={handlePause} className="counter-button">Pause</button>
            <button onClick={handleReset} className="counter-button">Reset</button>
        </div>
      </div>
    );
}