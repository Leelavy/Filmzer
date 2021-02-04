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

const ReviewsSlider = ({ sliderTitle }) => {

  const options = {
    type: 'loop',
    gap: '1.5rem',
    perPage: 5,
    perMove: 1,
    drag: true,
    autoplay: true,
    interval: 5000,
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
  width: 100%;
  img {
    width: 100%;
    height: 20vh;
    object-fit: cover;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    overflow: hidden;
  }
`;

export default ReviewsSlider;