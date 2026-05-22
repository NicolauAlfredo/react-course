import { books } from "../data/books.js";

// Function that returns all books
export function getBooks() {
  return books;
}

// Function that returns a single book by id
export function getBook(id) {
  return books.find((book) => book.id === id);
}
