import { useState } from "react"
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount((count) => count + 1);
    }

    function decrement() {
        if (count !== 0)
            setCount((count) => count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="counter-container">
            <div className="counter">
                <p>Count: {count}</p>
                <div className="counter-buttons">
                    <button className="counter-button" onClick={increment}>Increment</button>
                    <button className="counter-button" onClick={decrement}>Decrement</button>
                    <button className="counter-button" onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    ) 
}