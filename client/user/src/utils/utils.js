export const fixedRating = (rating) => {
  if (rating % 1 !== 0) {
    return rating.toFixed(2);
  }
  return rating;
}