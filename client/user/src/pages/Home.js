import React from 'react';
//Styles
import { StyledMotionDiv } from '../styles/styles';
//Animation
import { pageAnimation } from '../styles/animation';
//Components
import Loader from '../components/Loader';
import MainVideoSlider from '../components/MainVideoSlider';
import ReviewsSlider from '../components/ReviewsSlider';

const Home = () => {

  return (
    <>
      <Loader />
      <StyledMotionDiv
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <MainVideoSlider />
        <ReviewsSlider sliderTitle="LATEST REVIEWS" />
      </StyledMotionDiv>
    </>
  );
}

export default Home;