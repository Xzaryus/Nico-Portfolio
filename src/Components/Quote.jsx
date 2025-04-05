
import React, { useState, useEffect } from "react";

function Quote() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [countdown, setCountdown] = useState(30);

    const backupQuote = [
        {q: "Be yourself; everyone else is already taken.", a: "Oscar Wilde" },
        { q: "Success is not final, failure is not fatal: It is the courage to continue that counts.", a: "Winston Churchill" },
        { q: "You miss 100% of the shots you don't take.", a: "Wayne Gretzky" },
        { q: "The best time to plant a tree was 20 years ago. The second best time is now.", a: "Chinese Proverb" },
        { q: "Do what you can, with what you have, where you are.", a: "Theodore Roosevelt" },
        { q: "The only way to do great work is to love what you do.", a: "Steve Jobs" },
        { q: "Everything you’ve ever wanted is on the other side of fear.", a: "George Addair" },
        { q: "It always seems impossible until it’s done.", a: "Nelson Mandela" },
        { q: "Don’t wait. The time will never be just right.", a: "Napoleon Hill" },
        { q: "Happiness is not something ready made. It comes from your own actions.", a: "Dalai Lama" },
        { q: "Start where you are. Use what you have. Do what you can.", a: "Arthur Ashe" },
        { q: "Believe you can and you're halfway there.", a: "Theodore Roosevelt" },
        { q: "Whether you think you can or you think you can’t, you’re right.", a: "Henry Ford" },
        { q: "Strive not to be a success, but rather to be of value.", a: "Albert Einstein" },
        { q: "The future belongs to those who prepare for it today.", a: "Malcolm X" },
        { q: "Act as if what you do makes a difference. It does.", a: "William James" }

    ]
    const getQuote = () => {
        // *fetch(...) makes a GET request to ZenQuotes API
        // ! using a cors proxy to access the API whick normally is blocked and disable cache to get a new quote each time
        fetch("https://api.allorigins.win/get?url=https://zenquotes.io/api/random"+ "&disableCache=true")
            .then((res) => res.json())
            .then((data) => {
                // *JSON.parse() converts the JSON string to a JavaScript object
                const parsedData = JSON.parse(data.contents);
                
                if (parsedData[0].q.includes("Too many requests")) {
                    throw new Error("Rate limit hit");
                }
                
                setQuote(parsedData[0].q);
                setAuthor(parsedData[0].a);
            })
            .catch((error) => {
                console.error("Error fetching quote:", error);
                const fallbackQuote = backupQuote[Math.floor(Math.random() * backupQuote.length)];
                setQuote(fallbackQuote.q);
                setAuthor(fallbackQuote.a);
            });
        };
    
    useEffect(() => {
        getQuote();

        const newQuote = setInterval(() => {
            getQuote();
            setCountdown(30); // *Reset the countdown
        }, 30000);   

        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
        
        return () => {
            clearInterval(newQuote);
            clearInterval(timer);
        };
    }, []);
    
    return (
        <div id="quote-container" className="card hidden">
            <h2>Inspirational Quotes</h2>
            <p className="quote-text">"{quote}"</p>
            <p className="quote-author">{author}</p>
            <p className="quote-countdown">Next quote in {countdown} seconds</p>
            {/* <button id="quote-refresh" onClick={getQuote}>New Quote</button> */}
        </div>
    );
    };

export default Quote