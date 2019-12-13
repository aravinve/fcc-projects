generateRandomData = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const newQuoteBtn = document.querySelector("#new-quote");
const tweetQuoteBtn = document.querySelector("#tweet-quote");
const fbQuoteBtn = document.querySelector("#fb-quote");
const quoteTextArea = document.getElementsByClassName("quote-text")[0];
const quoteAuthorArea = document.getElementsByClassName("quote-author")[0];
const colors = ["#011627", "#2364AA", "#44AF69", "#E71D36", "#FF9F1C"];
let quoteDataArray = [];

document.addEventListener('DOMContentLoaded', () => {
    fetchQuoteData();
   setTimeout(() => {
    generateNewQuote();
   }, 500);
});

newQuoteBtn.addEventListener('click', () => {
    generateNewQuote();
});

function generateNewQuote() {
    if(quoteDataArray != null && quoteDataArray.length > 0){
        const quote = generateRandomData(quoteDataArray);
        quoteTextArea.innerHTML = quote.text;
        quoteAuthorArea.innerHTML = "- " + quote.author;
        const hrefString = `https://twitter.com/intent/tweet?hashtags=quotes&related=R@ndomQUote&text=${quote.text} ${quote.author}`;
        tweetQuoteBtn.setAttribute("href", hrefString);
    }
    const color = generateRandomData(colors);
    document.querySelector("body").style.backgroundColor = color;
    newQuoteBtn.style.backgroundColor = color;
    tweetQuoteBtn.style.color = color;
    fbQuoteBtn.style.color = color;
}

function fetchQuoteData(){
    if(quoteDataArray.length <= 0){
        fetch("https://type.fit/api/quotes")
        .then((res)=> res.json())
        .then(data => {
            if(data != null && data.length > 0){
                quoteDataArray = data;
            }
        })
        .catch(err => console.log(err));
    }
}