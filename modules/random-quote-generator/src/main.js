generateRandomData = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const newQuoteBtn = document.querySelector("#new-quote");
const tweetQuoteBtn = document.querySelector("#tweet-quote");
const tumblrQuoteBtn = document.querySelector("#tumblr-quote");
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
        const twitterString = `https://twitter.com/intent/tweet?hashtags=quotes,R@ndomQUote&related=R@ndomQUote&text=${quote.text} ${quote.author}`;
        const tumblrString = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=R@ndomQUote,quotes&caption=${quote.author}&content=${quote.text}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
        tweetQuoteBtn.setAttribute("href", twitterString);
        tumblrQuoteBtn.setAttribute("href", tumblrString);
    }
    const color = generateRandomData(colors);
    document.querySelector("body").style.backgroundColor = color;
    newQuoteBtn.style.backgroundColor = color;
    tweetQuoteBtn.style.color = color;
    tumblrQuoteBtn.style.color = color;
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