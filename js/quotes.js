const quotes = [
  { quote: "오늘 놀 일을 내일로 미루지 마라", author: "이상조" },
  { quote: "싫으면 안 하면 된다", author: "이상조" },
  { quote: "근본이 중요하다", author: "김효진" },
  { quote: "DONE is better than NOT COMPLETE", author: "김효진" },
  {
    quote: "일단 똥을 싸라, 그럼 유명해질 것이다",
    author: "이상조",
  },
  {
    quote: "죽지말고 죽여라",
    author: "한지민",
  },
  {
    quote: "A goal without a plan is just a wish.",
    author: "Antoine de Saint-Exupery",
  },
  {
    quote: "A wise man will make more opportunities than he finds.",
    author: "Sir Francis Bacon",
  },
  {
    quote: "Never leave that 'till tomorrow which you can do today.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Much learning does not teach understanding.",
    author: "Heraclitus",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
