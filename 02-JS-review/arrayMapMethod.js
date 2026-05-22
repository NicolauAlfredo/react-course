import { getBooks } from "./services/bookService.js";
import { getTotalReviewCount } from "./utils/bookUtils.js";

const books = getBooks();

// map() creates a new array by transforming each element
const doubledNumbers = [1, 2, 3, 4, 5, 6].map((el) => el * 2);
console.log(doubledNumbers);

// Extracting only book titles
const titles = books.map((book) => book.title);
console.log("Titles:", titles);

// Creating a simplified array of objects
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewCount: getTotalReviewCount(book),
}));

console.log(JSON.stringify(essentialData, null, 2));
