import { useState } from "react"
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if (count !== 0)
            setCount(count - 1);
    }

    return (
        <div className="counter">
            <p>Count: {count}</p>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    ) 
}