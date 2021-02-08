import React, { useEffect } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadAllReviews } from '../redux/actions/reviewsActions';
import { loadAllMovies } from '../redux/actions/moviesActions';
//Styles
import { StyledMotionDiv } from '../styles/styles';
import styled from 'styled-components';
//Routing
import { Link } from 'react-router-dom';
//Components
import Loader from '../components/Loader';
import ReviewCard from '../components/ReviewCard';
//Animation 
import { pageAnimationFromBottom } from '../styles/animation';
import { motion } from 'framer-motion';

const Reviews = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllReviews());
    dispatch(loadAllMovies());
  }, [dispatch]);

  const allReviews = useSelector(state => state.reviews.allReviews);
  const allMovies = useSelector(state => state.movies.allMovies);

  const allReviewsWithMovieData = allReviews.map((review) => {
    const movieFiltered = allMovies.filter((movie) => (movie._id === review.movies))[0];
    return {
      ...review,
      movies: movieFiltered,
    }
  })

  return (
    <>
      <Loader />
      <StyledMotionDiv
        variants={pageAnimationFromBottom}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <ReviewsGrid>
          {allReviewsWithMovieData && (
            allReviewsWithMovieData.map((review) => (
              <StyledLink to={`/movies/${review.movies._id}`}>
                <ReviewCard review={review} />
              </StyledLink>
            )))}
        </ReviewsGrid>
      </StyledMotionDiv>
    </>
  );
}

const ReviewsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 4rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Reviews;