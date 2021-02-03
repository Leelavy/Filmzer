import React from 'react';
//Styles
import { StyledMotionDiv } from '../styles/styles';
//Components
import Loader from '../components/Loader';
//Animation 
import { pageAnimation } from '../styles/animation';

const Movies = () => {

  return (
    <>
      <Loader />
      <StyledMotionDiv
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        Movies
      </StyledMotionDiv>
    </>
  );
}

export default Movies;