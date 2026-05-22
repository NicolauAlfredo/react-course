import { getBooks } from "./services/bookService.js";

const books = getBooks();

// reduce() accumulates all array values into a single value
// Here we are calculating the total number of pages
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
console.log(pagesAllBooks);