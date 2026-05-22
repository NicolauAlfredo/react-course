import { getBook } from "./service/bookService.js";
import { getYear } from "./utils/dateUtils.js";

// Get book with id
const bookId = 2;
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

  // Ternary operator
  // Used when we need to choose between two values based on a condition
  const pagesRange = pages > 1000 ? "Over a thousand" : "Less than 1000";

  console.log(`The book has ${pagesRange} pages`);

  // Short-circuiting with logical operators: &&, || and ??
  console.log("======== AND OPERATOR ========");

  // && returns the second value if the first one is truthy
  console.log(true && "Some string");

  // && returns the first falsy value it finds
  console.log(false && "Some string");

  // Useful for conditionally executing/rendering something
  console.log(hasMovieAdaptation && "This book has a movie");

  // Falsy values: 0, "", null, undefined, false, NaN
  console.log("nicolau" && "Some string");
  console.log(0 && "Some string");

  console.log("======== OR OPERATOR ========");

  // || returns the first truthy value it finds
  console.log(true || "Some string");
  console.log(false || "Some string");

  // Using || to provide a fallback value
  console.log(book.translations.spanish);

  const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
  console.log(spanishTranslation);

  // Problem with ||:
  // 0 is a valid value, but it is treated as falsy
  console.log(book.reviews.librarything.reviewsCount);

  const countWrong = book.reviews.librarything.reviewsCount || "NO DATA";
  console.log(countWrong);

  console.log("======== NULLISH COALESCING OPERATOR ========");

  // ?? only uses the fallback when the value is null or undefined
  // It keeps valid falsy values like 0 and ""
  const count = book.reviews.librarything.reviewsCount ?? "NO DATA";
  console.log(count);
}
