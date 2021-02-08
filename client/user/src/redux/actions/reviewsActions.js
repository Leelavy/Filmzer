import axios from 'axios';
import {
  reviewsURL,
  reviewByParamsURL,
  reviewsCountURL,
  latestReviewsURL,
  topLatestReviewsURL,
  reviewsByMovieIdURL,
  reviewsWithMoviesAndUsersURL,
  reviewsByIdURL
} from '../../api/reviews';

//Action creator - async using thunk

export const loadAllReviews = () => async (dispatch) => {
  //FETCH AXIOS
  const allReviewsData = await axios.get(reviewsURL());
  dispatch({
    type: "FETCH_REVIEWS",
    payload: {
      allReviews: allReviewsData.data,
    },
  });
};

export const loadAllReviewsWithData = () => async (dispatch) => {
  const allReviewsWithData = await axios.get(reviewsWithMoviesAndUsersURL());
  dispatch({
    type: "FETCH_REVIEWS_WITH_DATA",
    payload: {
      allReviewsWithData: allReviewsWithData.data,
    },
  });
};

export const loadTopLatestReviews = (numWanted) => async (dispatch) => {
  const topLatestReviewsData = await axios.get(topLatestReviewsURL(numWanted));
  dispatch({
    type: "FETCH_TOP_LATEST_REVIEWS",
    payload: {
      topLatestReviews: topLatestReviewsData.data,
    },
  });
};