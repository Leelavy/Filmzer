import React, { useEffect, useState } from 'react';
//Redux
import { useSelector } from 'react-redux';
//Styles
import styled from 'styled-components';
//Routing
import { Link } from 'react-router-dom';
//Splide carousel
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
//MUI components
import StarsIcon from '@material-ui/icons/Stars';
//Animation
import { motion } from 'framer-motion';

const ReviewsSlider = ({ sliderTitle }) => {

  const options = {
    type: 'loop',
    gap: '1.5rem',
    perPage: 5,
    perMove: 1,
    drag: true,
    autoplay: true,
    interval: 2000,
    pauseOnHover: true,
    resetProgress: false,
    arrows: 'slider',
  };

  const allMovies = useSelector(state => state.movies.allMovies);
  const topLatestReviews = useSelector(state => state.reviews.topLatestReviews);
  const [topLatestReviewsWithMovieData, setTopLatestReviewsWithMovieData] = useState(null);

  useEffect(() => {
    const reviews = topLatestReviews.map((review) => {
      const movieFiltered = allMovies.filter((movie) => (movie._id === review.movies))[0];
      return {
        ...review,
        movies: movieFiltered,
      };
    });
    setTopLatestReviewsWithMovieData(reviews);
  }, [topLatestReviews, allMovies])

  return (
    <>
      <StyledSliderHeader>
        <StarsIcon />
        <h2>{sliderTitle}</h2>
      </StyledSliderHeader>
      <Splide
        options={options}
      >
        {topLatestReviewsWithMovieData && (
          topLatestReviewsWithMovieData.map((review) => (
            <SplideSlide key={review.movies._id}>
              <StyledDiv>
                <StyledLink to={`/movies/${review.movies._id}`}>
                  <StyledSliderDataDiv>
                    <StyledGrayDiv>
                      <motion.h4>{review.movies.title}</motion.h4>
                    </StyledGrayDiv>
                    <StyledGrayDiv>
                      <motion.h4>{`${review.rating}/10`}</motion.h4>
                    </StyledGrayDiv>
                  </StyledSliderDataDiv>
                  <img src={review.movies.image_url} alt={review.movies.title} />
                </StyledLink>
              </StyledDiv>
            </SplideSlide>
          )))}
      </Splide>
    </>
  );
}

const StyledSliderHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  h2 {
    font-weight: normal
    ;
    margin-left: 1rem;
    letter-spacing: 0.5rem;
  }
`;

const StyledDiv = styled.div`
  transition: transform .2s;
  position: relative;
  width: 100%;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    border-radius: 0px;
    cursor: pointer;
    transform: scale(0.95);
  }

  img {
    width: 100%;
    height: 20vh;
    object-fit: cover;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    overflow: hidden;
  }
`;

const StyledSliderDataDiv = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  h1 {
    font-size: 3rem;
  }
`;

const StyledGrayDiv = styled(motion.div)`
  padding: 0.5rem 0.7rem;
  margin: 5rem 1rem 0.5rem 0;
  background-color: #141414;
  border-radius: 5px;
  font-size: 0.8rem;

  h4 {
    text-decoration: none;
    color: white;
  }
`;

const StyledLink = styled(Link)`
`;

export default ReviewsSlider;