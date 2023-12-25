let apiQuotes = [];
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote-Btn");
const TweetBtn = document.getElementById("twitter");
const loaderView = document.getElementById("loader");
const divContainer = document.getElementById("quote-container");
const ayah = document.getElementById("ayaa");


function newQuote(quoteres){

    loading();

    quoteText.textContent = quoteres.text;
    authorText.textContent = quoteres.sura_name;
    ayah.textContent = quoteres.ayah_number;

    complete();

}

async function getQuotes(){

    loading();
    let sura_number = 2;
    let ayah_number = Math.floor(Math.random()*280);
    const apiUrl = `http://api.quran-tafseer.com/quran/${sura_number}/${ayah_number}`;
    


    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote(apiQuotes);
    } catch (error) 
    {
       // console.log(error);
        
    }

    complete();

}

function tweetQuote() {

    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent} ${ayah.textContent}`;
    window.open(twitterUrl, '_blank');
}

function loading (){

    loaderView.hidden = false;
    divContainer.hidden = true;

}

function complete() {

    loaderView.hidden = true;
    divContainer.hidden = false;
}

//On Load

getQuotes();

// Upon Clicking new Quote Btn

newQuoteBtn.addEventListener('click', getQuotes);

// Upon Clicking Tweet Btn 

TweetBtn.addEventListener('click', tweetQuote);
