// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
function printQuote() {};
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {quote: 'A journey of a thousand miles begins with a single step.', source: 'Lao Tzu', citation: 'Chapter 64, Tao Te Ching', year: '6th century BC' },
  {quote: 'Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.', source: 'Samuel Beckett', citation: 'Worstward Ho', year: 1983 },
  {quote: 'You miss 100% of the shots you don\'t take', source: 'Wayne Gretzky', citation: '', year: '' },
  {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', source: 'Albert Einstein', citation: '', year: ''},
  {quote: 'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.', source: 'Helen Keller', citation: 'We Bereaved', year: 1929 },
]

//function to obtain a random number from 0 to 4
function randomNumber() {
  var number = Math.floor(Math.random() * 5);
  return number;
}

//Use random number generator to obtain a random quote from the 'quotes' array
function getRandomQuote() {
  return quotes[randomNumber()];
}

//to complete
function printQuote() {
  var quoteShown = getRandomQuote();
  //this function should construct a string similar to the below line.
  <p class="quote"> [quote here] </p> <p class="source"> [source here] <span class="citation"> [citation here] </span> <span class="year"> [year here] </span> </p>
}
