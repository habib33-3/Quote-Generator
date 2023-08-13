const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    person: "Franklin D. Roosevelt",
  },
  {
    quote: "Life is what happens when you're busy making other plans",
    person: "John Lennon",
  },
  {
    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
    person: `Aristotle`,
  },
  {
    quote: `"Your time is limited, so don't waste it living someone else's life."`,
    person: ` Steve Jobs`,
  },
  {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: ` Benjamin Franklin`,
  },
  {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`,
  },
  {
    quote: `"t does not matter how slowly you go as long as you do not stop."`,
    person: `Confucius`,
  },
  {
    quote: `"Our lives begin to end the day we become silent about things that matter."`,
    person: `Martin Luther King, Jr.`,
  },
  {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
    person: `Dalai Lama`,
  },
  {
    quote: `"The journey of a thousand miles begins with one step."`,
    person: `Lao Tzu`,
  },
];

function quoteGenerate() {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
}

btn.addEventListener("click",quoteGenerate);
