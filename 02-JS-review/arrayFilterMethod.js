import { getBooks } from "./service/bookService.js";

const books = getBooks();

// Filter books with more than 500 pages
// and that also have movie adaptations
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

console.log(longBooksWithMovie);

// Filter books that contain the "adventure" genre
// and extract only their titles
console.log("===== ADVENTURE BOOKS =====");
const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

console.log(adventureBooks);
