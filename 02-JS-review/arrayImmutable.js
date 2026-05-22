import { getBooks } from "./services/bookService.js";

const books = getBooks();

// 1) Add a new book object to the array
// Using spread operator to create a new array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];

console.log(booksAfterAdd);

// 2) Delete a book object from the array
// Keeping all books except the one with id 3
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);

console.log(booksAfterDelete);

// 3) Update a book object inside the array
// Creating a new updated object only for book with id 1
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book,
);

console.log(booksAfterUpdate);
