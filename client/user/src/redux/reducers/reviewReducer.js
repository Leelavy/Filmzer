const initState = {
  allReviews: [],
  topLatestReviews: [],
}

const reviewsReducer = (state = initState, action) => {
  switch (action.type) {

    case "FETCH_REVIEWS":
      return {
        ...state,
        allReviews: action.payload.allReviews,
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