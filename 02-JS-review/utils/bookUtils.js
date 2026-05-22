// Function that calculates the total number of reviews
export function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;

  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  return goodreads + librarything;
}
