import React, { useState, useEffect } from 'react';
//Axios
import axios from 'axios';
import { reviewsByMovieIdURL } from '../api/reviews';
//Redux
import { useSelector } from 'react-redux';
//Styled
import styled from 'styled-components';
import { StyledMotionDiv } from '../styles/styles';
//Routing
import { useLocation } from 'react-router-dom';
//Components
import Loader from '../components/Loader';
import ReviewFeedItem from '../components/ReviewFeedItem';
import ReviewForm from '../components/ReviewForm';
//Animation
import { pageAnimationFromBottom } from '../styles/animation';
import { motion } from 'framer-motion';

const MovieDetails = () => {

  const location = useLocation();
  const movieId = decodeURI(location.pathname.split("/")[2]);

  const [currentMovie, setCurrentMovie] = useState(null);
  const [currentMovieReviews, setCurrentMovieReviews] = useState([]);
  const allMovies = useSelector(state => state.movies.allMovies);

  const isLogged = useSelector(state => state.user.isLogged);

  useEffect(() => {
    const movieFiltered = allMovies.filter((movie) => (movie._id === movieId))[0];
    setCurrentMovie(movieFiltered);
    if (!movieFiltered) {
      return;
    }
    axios.get(reviewsByMovieIdURL(movieFiltered._id))
      .then((response) => {
        return response.data;
      })
      .then((data) => setCurrentMovieReviews(data))
  }, [allMovies, movieId]);

  console.log(currentMovieReviews);

  return (
    <>
      <Loader />
      <StyledMotionDiv
        variants={pageAnimationFromBottom}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {currentMovie &&
          <>
            <StyledMovieHeaderDiv>
              <StyledStarDiv>
                <motion.h4>Rating in stars</motion.h4>
              </StyledStarDiv>
              <StyledMovieImg src={currentMovie.image_url} alt="" />
              <StyledDataDiv>
                <StyledGrayDiv>
                  <motion.h4>TITLE</motion.h4>
                  <motion.h2>{currentMovie.title.toUpperCase()}</motion.h2>
                </StyledGrayDiv>
                <StyledGrayDiv>
                  <motion.h4>GENRE</motion.h4>
                  <motion.h2>{currentMovie.genre}</motion.h2>
                </StyledGrayDiv>
                <StyledGrayDiv>
                  <motion.h4>YEAR</motion.h4>
                  <motion.h2>{currentMovie.year}</motion.h2>
                </StyledGrayDiv>
                <StyledGrayDiv>
                  <motion.h4>REVIEWS COUNTER</motion.h4>
                  <motion.h2>{currentMovieReviews.length}</motion.h2>
                </StyledGrayDiv>
                <StyledGrayDiv>
                  <motion.h4>AVERAGE RATING</motion.h4>
                  <motion.h2>{currentMovie.rating_avg}</motion.h2>
                </StyledGrayDiv>
              </StyledDataDiv>
            </StyledMovieHeaderDiv>
            <StyledDescriptionDiv>
              <motion.p>{currentMovie.description}</motion.p>
            </StyledDescriptionDiv>
            {isLogged ?
              (<ReviewForm
                movieId={movieId}
                currentMovieReviews={currentMovieReviews}
                setCurrentMovieReviews={setCurrentMovieReviews}
              />)
              :
              (<Styledh1>* <span>SIGN IN</span> TO POST A REVIEW *</Styledh1>)
            }
            {currentMovieReviews && (
              currentMovieReviews.map((review) => (
                <ReviewFeedItem review={review} />
              )))}
          </>
        }
      </StyledMotionDiv>
    </>
  );
}

const StyledMovieHeaderDiv = styled(motion.div)`
  position: relative;
  display: flex;
  width: 100%;
  height: 500x;

`;

const StyledStarDiv = styled(motion.div)`
  position: absolute;
  top: 82%;
  left: 2%;
  width: 10%;
  padding: 1rem 0.7rem;
  background-color: #141414;
  border-radius: 5px;
  font-size: 0.8rem;
  color: red;
`;

const StyledDataDiv = styled(motion.div)`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 3rem;
`;

const StyledMovieImg = styled(motion.img)`
  width: 50%;
  object-fit: cover;
  border-radius: 15px;
`;

const StyledGrayDiv = styled(motion.div)`
    
    width: 80%;
    min-width: 200px;
    padding: 01rem 0.7rem;
    margin: 1rem 0;
    background-color: #141414;
    border-radius: 5px;
    font-size: 0.8rem;

    h4 {
      color: red;
      margin-bottom: 0.3rem;
    }
`;

const StyledDescriptionDiv = styled(motion.div)`
  margin: 4rem 0;
  p {
    font-size: 1.2rem;
    text-align: justify;
    line-height: 2rem;
    font-weight: lighter;
    padding-right: 2rem;
  }
`;

const Styledh1 = styled.h1`
  letter-spacing: 0.5rem;
  span {
    color: red;
  }
`;

export default MovieDetails;