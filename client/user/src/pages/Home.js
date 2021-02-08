import React, { useEffect, useState } from 'react';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { loadAllMovies, loadTopMovies } from '../redux/actions/moviesActions'
import { loadAllReviews, loadTopLatestReviews } from '../redux/actions/reviewsActions';
//Styles
import { StyledMotionDiv } from '../styles/styles';
//Animation
import { pageAnimation } from '../styles/animation';
//Components
import Loader from '../components/Loader';
import MainVideoSlider from '../components/MainVideoSlider';
import ReviewsSlider from '../components/ReviewsSlider';

const Home = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTopMovies(5));
    dispatch(loadTopLatestReviews(10));
  }, [dispatch]) //useEffect runs only when dispatch happens

  const topMovies = useSelector(state => state.movies.topMovies);

  return (
    <>
      <Loader />
      <StyledMotionDiv
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <MainVideoSlider topMovies={topMovies} />
        <ReviewsSlider sliderTitle="LATEST REVIEWS" />

      </StyledMotionDiv>
    </>
  );
}

export default Home;