const quotes = [
    {
        quote: "Don't dwell on the past.",
        author: "...",
    },
    {
        quote: "Believe in yourself.",
        author: "...",
    },
    {
        quote: "Follow your heart.",
        author: "...",
    },
    {
        quote: "Seize the day.",
        author: "...",
    },
    {
        quote: "You only live once.",
        author: "...",
    },
    {
        quote: "Past is just past.",
        author: "...",
    },
    {
        quote: "Love yourself.",
        author: "...",
    },
    {
        quote: "Where there is a will there is a way.",
        author: "...",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
