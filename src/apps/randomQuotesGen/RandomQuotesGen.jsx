import { useState } from "react";
import quotes from './quotes'
import './RandomQuotesGen'

export default function RandomQuotesGen() {

    const [currentQuote, setCurrentQuote] = useState({});
    const [hidden, setHidden] = useState(false);

    function handleHidden () {
        if (hidden == true) {
            setHidden(false);
        } else {
            setHidden(true);
        }
    }

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random()*quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    }

    return (
        <div>
            <div className="quote">
                <p>{currentQuote.text}</p>
                <p>{currentQuote.author}</p>
            </div>
            <div className="quote-gen-container">
            <button className="quote-gen-button counter-button" onClick={getRandomQuote}>Generate Random Quote</button>
            { hidden ? quotes.map((element)=> (
                        <li key={element}>
                            {element.text} {" - "}
                            {element.author}
                        </li>
            )) : ("")}
            <button className="counter-button" onClick={handleHidden}>{hidden? "Hide" : "Show all quotes"}</button>
            </div>
        </div>
    )
}