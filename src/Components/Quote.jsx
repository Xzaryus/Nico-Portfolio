
import React, { useState, useEffect } from "react";

function Quote() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const getQuote = () => {
        // *fetch(...) makes a GET request to ZenQuotes API
        // ! using a cors proxy to access the API whick normally is blocked and disable cache to get a new quote each time
        fetch("https://api.allorigins.win/get?url=https://zenquotes.io/api/random"+ "&disableCache=true")
            .then((res) => res.json())
            .then((data) => {
                // *JSON.parse() converts the JSON string to a JavaScript object
                const parsedData = JSON.parse(data.contents);
                setQuote(parsedData[0].q);
                setAuthor(parsedData[0].a);
            })
            .catch((error) => {
                console.error("Error fetching quote:", error);
                setQuote("Could not load quote.");
                setAuthor("");
            });
        };
    
    useEffect(() => {
        getQuote();
    }, []);
    
    return (
        <div id="quote-container" className="card hidden">
            <h2>Inspirational Quotes</h2>
            <p className="quote-text">"{quote}"</p>
            <p className="quote-author">{author}</p>
            <button id="quote-refresh" onClick={getQuote}>New Quote</button>
        </div>
    );
    };

export default Quote