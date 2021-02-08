const initState = {
  allReviews: [],
  allReviewsWithData: [],
  topLatestReviews: [],
}

const reviewsReducer = (state = initState, action) => {
  switch (action.type) {

    case "FETCH_REVIEWS":
      return {
        ...state,
        allReviews: action.payload.allReviews,
      };
    case "FETCH_REVIEWS_WITH_DATA":
      return {
        ...state,
        allReviewsWithData: action.payload.allReviewsWithData,
      };
    case "FETCH_TOP_LATEST_REVIEWS":
      return {
        ...state,
        topLatestReviews: action.payload.topLatestReviews,
      };
    default:
      return { ...state };
  }
}

export default reviewsReducer;