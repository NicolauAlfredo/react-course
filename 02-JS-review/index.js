import { getBook } from "./service/bookService.js";
import { getYear } from "./utils/dateUtils.js";

// Get book with id
const bookId = 1;
const book = getBook(bookId);

// Object destructuring
// Extracting properties from the book object
if (!book) {
  console.log(`Book ${bookId} not found`);
} else {
  const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
    book;

  // Logging book information
  console.log(`
title: ${title}
author: ${author}
Genres: ${genres}
`);

  // Array destructuring
  // Extracting first and second genres
  const [primaryGenre, secondGenre, ...otherGenres] = genres;

  // Logging extracted genres
  console.log(`
Primary Genre: ${primaryGenre}
Second Genre: ${secondGenre}
Other Genres: ${otherGenres}
`);

  // New Genres, spread operation
  const newGenre = ["epic fantasy", ...genres];

  console.log(`New Genre: ${newGenre}`);

  // Immutable updates
  const updatedBook = {
    // Rest operator (...)
    ...book,

    // Adding a new property
    moviePublicationDate: "2001-12-19",

    // Overwriting an existing property
    pages: 1210,
  };

  console.log("======== NEW BOOK ========");

  console.log(`
Title: ${title}
Publication Date: ${updatedBook.moviePublicationDate}
Pages: ${updatedBook.pages}
`);

  console.log(getYear(publicationDate));

  console.log("======== SUMMARY ========");

  const summary = `${title}, is a ${pages}-page long book, was written by ${author}, and published in ${getYear(
    publicationDate,
  )}. The book has ${hasMovieAdaptation ? "" : "not "}been adapted as a movie`;

  console.log(summary);

  // Ternaries instead of if/else statements
  const pagesRange = pages > 1000 ? "Over a thousand" : "Less than 1000";

  console.log(`The book has ${pagesRange} pages`);
}
