var html = '';
var quotes = [
  {quote: 'A journey of a thousand miles begins with a single step.', source: 'Lao Tzu', citation: 'Chapter 64, Tao Te Ching', year: '6th century BC' },
  {quote: 'Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.', source: 'Samuel Beckett', citation: 'Worstward Ho', year: 1983 },
  {quote: 'You miss 100% of the shots you don\'t take', source: 'Wayne Gretzky', citation: ' ', year: ' ' },
  {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', source: 'Albert Einstein', citation: ' ', year: ' '},
  {quote: 'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.', source: 'Helen Keller', citation: 'We Bereaved', year: 1929 },
]
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// ??This is not needed as we are using printQuote to display final HTML string to the page
/*function print(html) {
  html = document.getElementById('quote-box').innerHTML;
  return html;
}*/

//function to obtain a random number from 0 to 4
function randomNumber() {
  var number = Math.floor(Math.random() * 5);
  return number;
}

//Use random number generator to obtain a random quote object from the 'quotes' array
function getRandomQuote() {
  var randomQuoteObject = quotes[randomNumber()]; //obtains a random whole object from quotes array (including quote, source, citation etc)
  return randomQuoteObject;
}

function printQuote() {
  var quoteObject = getRandomQuote();
  //html = document.getElementById('quote-box').innerHTML;
  html = '<p class="quote">' + quoteObject.quote + '</p> <p class="source">' + quoteObject.source;
  if (quoteObject.citation !== ' ') {
    html += '<span class="citation">' + quoteObject.citation + '</span>';
  }
  if (quoteObject.year !== ' ') {
    html += '<span class="year">' + quoteObject.year + '</span>';
  }
  html += '</p>';
  return html;
}
// How to use this >>>>>>>>>>>>document.getElementById('quote-box').innerHTML;
printQuote();
console.log(html);
