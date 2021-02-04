import React from "react";
//Styles
import styled from 'styled-components';
//Dummy Data
import { movies } from '../dummyData';
//Splide carousel
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const MainVideoSlider = () => {

  const options = {
    type: 'loop',
    gap: '1rem',
    drag: true,
    autoplay: true,
    interval: 3000,
    pauseOnHover: true,
    resetProgress: false,
    arrows: 'slider',
  };

  return (

    <StyledSplideSlider
      options={options}
    >
      {movies.slice(0, 3).map(movie => (
        <SplideSlide key={movie.movieTitle}>
          <StyledDiv>
            <img src={movie.imageUrl} alt={movie.movieTitle} />
          </StyledDiv>
        </SplideSlide>
      ))}
    </StyledSplideSlider>
  );
}

const StyledSplideSlider = styled(Splide)`
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const StyledDiv = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    object-position: top;
  }
`;

export default MainVideoSlider;