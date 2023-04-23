import { useEffect, useState } from "react"

export default function FetchQuotes() {
    const [currentQuote, setCurrentQuote] = useState({});
    const [hidden, setHidden] = useState(false)

    const handleHidden = () => {
        if (hidden == true) setHidden(false)
        else setHidden(true)
    }

    const getRandomQuote = async () => {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        setCurrentQuote({ text: data.content, author: data.author });
    };

    useEffect(() => {
        getRandomQuote();
    },[])

    return (
        <div>
            <h2>Using fetch API (quotable api)</h2>
            {!currentQuote.text ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>{currentQuote.text}</p>
                    <p>{currentQuote.author}</p>
                </div>
            )}
            <button className="counter-button" onClick={getRandomQuote}>Generate Random Quote</button>
            {/* <button className="counter-button" onClick={handleHidden}>{hidden? "Hide": "Show All Quotes"}</button> */}
            {/* {
                hidden? (

                ) : ()
            } */}
        </div>
    )
}