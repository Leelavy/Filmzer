import React from 'react';
//Styles
import styled from 'styled-components';
//Splide carousel
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
//Dummy Data
import { reviews } from '../dummyData';
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

  return (
    <>
      <StyledSliderHeader>
        <StarsIcon />
        <h2>{sliderTitle}</h2>
      </StyledSliderHeader>
      <Splide
        options={options}
      >
        {reviews.slice(0, 8).map(review => (
          <SplideSlide key={review.movie.movieTitle}>
            <StyledDiv>
              <StyledSliderDataDiv>
                <StyledGrayDiv>
                  {review.movie.movieTitle}
                </StyledGrayDiv>
                <StyledGrayDiv>
                  {`${review.rating}/10`}
                </StyledGrayDiv>
              </StyledSliderDataDiv>
              <img src={review.movie.imageUrl} alt={review.movie.movieTitle} />
            </StyledDiv>
          </SplideSlide>
        ))}
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
`;

export default ReviewsSlider;