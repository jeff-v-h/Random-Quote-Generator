// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var html = '';
var color;
var quotes = [
  {quote: 'A journey of a thousand miles begins with a single step.', source: 'Lao Tzu', citation: 'Chapter 64, Tao Te Ching', year: '6th century BC', tags: 'motivational' },
  {quote: 'Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.', source: 'Samuel Beckett', citation: 'Worstward Ho', year: 1983, tags: 'business' },
  {quote: 'You miss 100% of the shots you don\'t take', source: 'Wayne Gretzky', citation: ' ', year: ' ', tags: 'sports' },
  {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', source: 'Albert Einstein', citation: ' ', year: ' ', tags: 'motivational' },
  {quote: 'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.', source: 'Helen Keller', citation: 'We Bereaved', year: 1929, tags: 'happiness, love' },
  {quote: 'With great power comes great responsibility', source: 'Uncle Ben', citation: 'Spider-Man', year: '2002', tags: 'humour, superhero' },
];
var shown = [];
var refreshQuote = window.setInterval(printQuote, 30000); // every 30 seconds the printQuote function will be called to change the quote

//function to obtain a random number from 0 to 4
function randomNumber() {
  var number = Math.floor(Math.random() * quotes.length);
  return number;
}

//Use random number generator to obtain a random quote object from the 'quotes' array
function getRandomQuote() {
  var randomQuoteObject = quotes[randomNumber()]; //obtains a random whole object from quotes array (including quote, source, citation etc)
  return randomQuoteObject;
}

function randomColor() { // generate random color for changing background color
  color = '#';
  var selection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  for (var i=0; i<6; i++ ) {
    color += selection[Math.floor(Math.random() * 16)]; // generates random number 0 to 15 and uses it to get a random number or letter from the 'selection' array
  }
}

function changeBackground() { //function to change the background color and color of button
  randomColor();
  document.body.style.backgroundColor = color;
  document.getElementById('loadQuote').style.backgroundColor = color;
}

function refillArray() { //uses for loop to move all objects from the shown array back into the quotes array
  for (var i=0; i < 6; i++) {
    var movedObject = shown.shift();
    quotes.push(movedObject);
  }
}

function resetInterval() { //function to reset timer to 0 when button clicked
  clearInterval(refreshQuote);
  refreshQuote = window.setInterval(printQuote, 30000);
}

function printQuote() {
  if (quotes.length < 1) { //if all quotes have been shown, all quote objects are put back into the quotes array
    refillArray();
  }
  var quoteObject = getRandomQuote();
  html = '<p class="quote">' + quoteObject.quote + '</p> <p class="source">' + quoteObject.source;
  if (quoteObject.citation !== ' ') {   //if there is a citation, it will be added to the html
    html += '<span class="citation">' + quoteObject.citation + '</span>';
  }
  if (quoteObject.year !== ' ') { //if there is a year, it will be added to the html
    html += '<span class="year">' + quoteObject.year + '</span>';
  }
  html += ', ' + quoteObject.tags + '</p>';
  document.getElementById('quote-box').innerHTML = html; // obtains html in the quote-box div and replaces with 'html'
  var indexQuoteObject = quotes.indexOf(quoteObject); // finding index of the quote object to then..
  shown.push(quoteObject); // ... move the quote object selected into the shown array while also...
  quotes.splice(indexQuoteObject, 1); //... removing it from the quotes array
  changeBackground();
  resetInterval();
  return html;
}
