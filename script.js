let apiQuotes = [];
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote-Btn");
const TweetBtn = document.getElementById("twitter");
const loaderView = document.getElementById("loader");
const divContainer = document.getElementById("quote-container");
const ayah = document.getElementById("ayaa");


/**
 * Hides the loader view and displays the quote container.
 */
function loading() {
  /**
   * @type {HTMLElement}
   */
  const loaderView = document.getElementById('loader');
  /**
   * @type {HTMLElement}
   */
  const divContainer = document.getElementById('quote-container');

  loaderView.hidden = false;
  divContainer.hidden = true;
}

/**
 * Fetches a new quote from the API and displays it.
 */
async function getQuotes() {
  // Show the loading indicator
  loading();

  // Get a random sura and ayah number
  let sura_number = 2; // hardcoded for now
  let ayah_number = Math.floor(Math.random() * 280);

  // Construct the API URL
  const apiUrl = `http://api.quran-tafseer.com/quran/${sura_number}/${ayah_number}`;

  try {
    // Make a request to the API
    const response = await fetch(apiUrl);
    // Parse the response as JSON
    apiQuotes = await response.json();
    // Display the new quote
    newQuote(apiQuotes);
  } catch (error) {
    // Log any errors
    console.error(error);
  }

  // Hide the loading indicator
  complete();
}

/**
 * Hides the loader view and displays the quote container.
 */
function loading() {
  // Get the loader view and quote container elements
  const loaderView = document.getElementById('loader');
  const divContainer = document.getElementById('quote-container');

  // Hide the quote container and show the loader view
  loaderView.hidden = false;
  divContainer.hidden = true;
}

/**
 * Displays a new quote on the page.
 *
 * @param {Object} quotes - The quotes data from the API
 */
function newQuote(quotes) {
  // Get the quote and author text elements
  const quoteText = document.getElementById('quote');
  const authorText = document.getElementById('author');
  // Set the new quote text
  quoteText.textContent = quotes.data.text.ar;
  // Set the author text
  authorText.textContent = quotes.data.sura.name + ' - ' + quotes.data.aya.name;
  // Get the ayah element
  const ayah = document.getElementById('ayaa');
  // Set the ayah text
  ayah.textContent = quotes.data.aya.text.ar;
}

/**
 * Hides the loader view and displays the quote container.
 */
function complete() {
  // Get the loader view and quote container elements
  const loaderView = document.getElementById('loader');
  const divContainer = document.getElementById('quote-container');

  // Hide the loader view and show the quote container
  loaderView.hidden = true;
  divContainer.hidden = false;
}

// On load
getQuotes();

// On click of the new quote button
document.getElementById('new-quote-Btn').addEventListener('click', getQuotes);

// On click of the tweet button
document.getElementById('twitter').addEventListener('click', tweetQuote);

/**
 * Opens a new window with the tweet URL for the current quote.
 */
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent} ${ayah.textContent}`;
  window.open(twitterUrl, '_blank');
}

/**
 * Hides the loader view and displays the quote container.
 */
function loading() {
  /**
   * @type {HTMLElement}
   */
  const loaderView = document.getElementById('loader');
  /**
   * @type {HTMLElement}
   */
  const divContainer = document.getElementById('quote-container');

  loaderView.hidden = false;
  divContainer.hidden = true;
}

/**
 * Hides the loader view and displays the quote container.
 */
function complete() {
    /**
     * @type {HTMLElement}
     */
    const loaderView = document.getElementById('loader');
    /**
     * @type {HTMLElement}
     */
    const divContainer = document.getElementById('quote-container');

    loaderView.hidden = true;
    divContainer.hidden = false;
}

//On Load

getQuotes();

// Upon Clicking new Quote Btn

newQuoteBtn.addEventListener('click', getQuotes);

// Upon Clicking Tweet Btn 

TweetBtn.addEventListener('click', tweetQuote);
