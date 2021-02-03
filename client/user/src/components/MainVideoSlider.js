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
    gap: '1rem',
  };

  return (

    <Splide
      options={options}
    >
      <SplideSlide>
        <StyledDiv>
          <img src={movies[0].imageUrl} alt="Image 1" />
        </StyledDiv>
      </SplideSlide>
      <SplideSlide>
        <img src={movies[1].imageUrl} alt="Image 2" />
      </SplideSlide>
    </Splide>

    // <Splide
    //   options={{
    //     rewind: true,
    //     perPage: 2,
    //     perMove: 1,
    //     gap: '1rem',
    //   }}
    //   onMoved={(splide, newIndex) => { console.log('moved', newIndex) }}
    // >
    //   { movies.map(movie => (
    //     <SplideSlide key={movie.movieTitle}>
    //       <img src={movie.imageUrl} alt={movie.movieTitle} />
    //     </SplideSlide>
    //   ))}
    // </Splide>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

export default MainVideoSlider;