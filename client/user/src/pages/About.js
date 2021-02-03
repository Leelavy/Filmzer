import React from 'react';
//Styles
import { StyledMotionDiv } from '../styles/styles';
//Components
import Loader from '../components/Loader';
//Animation 
import { pageAnimation } from '../styles/animation';

const About = () => {

  return (
    <>
      <Loader />
      <StyledMotionDiv
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        About
      </StyledMotionDiv>
    </>
  );
}

export default About;