import { useEffect, useState } from "react";
import './Stopwatch.css'

export default function Stopwatch(props) {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(58);
    const [miliSeconds, setMiliSeconds] = useState(0);
    const [hour, setHour] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let intervalIdMiliSeconds;
        let intervalIdSeconds;
        let intervalIdMinutes;
        let intervalIdHour;
        if (isActive) {
            intervalIdMiliSeconds = setInterval(() => {
                setMiliSeconds((miliSeconds) => {
                    if (miliSeconds === 59) {
                        setSeconds((seconds) => seconds + 1);
                        return 0;
                    } else {
                        return miliSeconds + 1;
                    }
                });
            }, 100);
        }
        if (isActive) {
            intervalIdSeconds = setInterval(() => {
                setSeconds((seconds) => {
                    if (seconds === 59) {
                        setMinutes((seconds) => seconds + 1);
                        return 0;
                    } else {
                        return seconds + 1;
                    }
                });
            }, 1000);
        }
        if (isActive) {
            intervalIdMinutes = setInterval(() => {
                setMinutes((minutes) => {
                    if (minutes === 59) {
                        setHour((hour) => hour + 1);
                        return 0;
                    } else {
                        return minutes + 1;
                    }
                });
            }, 60000);
        }
        if (isActive) {
            intervalIdHour = setInterval(() => {
                setHour((hour) => hour + 1);
            }, 100000);
        }
        return () => {
            clearInterval(intervalIdMiliSeconds);
            clearInterval(intervalIdSeconds);
            clearInterval(intervalIdMinutes);
            clearInterval(intervalIdHour);
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
        setMiliSeconds(0);
        setMinutes(0);
        setHour(0);
    }

    return (
        <div className="stopwatch-container">
            <h1>{hour}h {minutes}m {seconds}s {miliSeconds}m</h1>
            <div className="stopwatch-buttons">
                <button onClick={handleStart} className="counter-button">Start</button>
                <button onClick={handlePause} className="counter-button">Pause</button>
                <button onClick={handleReset} className="counter-button">Reset</button>
            </div>
        </div>
    );
}