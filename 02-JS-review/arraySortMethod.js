import { getBooks } from "./services/bookService.js";

const books = getBooks();

// Original array
const x = [3, 8, 5, 1, 6, 2, 4, 10, 7, 9];

// slice() creates a shallow copy
// sort() mutates the array, so we copy it first
const sorted = x.slice().sort((a, b) => a - b);

console.log("Sorted:", sorted);

// Original array remains unchanged
console.log("Original Array:", x);

// Sorting books by number of pages (descending order)
const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);

console.log(sortedByPages);
