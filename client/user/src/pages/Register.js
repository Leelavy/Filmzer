import React from 'react';
//Styles
import { StyledMotionDiv } from '../styles/styles';
//Components
import Loader from '../components/Loader';
//Animation 
import { pageAnimation } from '../styles/animation';

const Register = () => {

  return (
    <>
      <Loader />
      <StyledMotionDiv
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        Register
      </StyledMotionDiv>
    </>
  );
}

export default Register;