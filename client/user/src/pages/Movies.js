import React from 'react';
//Styles
import { StyledMotionDiv } from '../styles/styles';
import styled from 'styled-components';
//Components
import Loader from '../components/Loader';
import MovieCard from '../components/MovieCard';
//Animation 
import { pageAnimationFromBottom } from '../styles/animation';
import { motion } from 'framer-motion';
//Dummy Data
import { movies } from '../dummyData';

const Movies = () => {

  return (
    <>
      <Loader />
      <StyledMotionDiv
        variants={pageAnimationFromBottom}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <MoviesGrid>
          {movies.map((movie) => (<MovieCard movie={movie} />))}
        </MoviesGrid>
      </StyledMotionDiv>
    </>
  );
}

const MoviesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 4rem;
`;

export default Movies;