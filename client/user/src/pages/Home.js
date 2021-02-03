import React from 'react';
//Styles
import styled from 'styled-components';
import { StyledContentDiv } from '../styles/styles';
//Components
import MainVideoSlider from '../components/MainVideoSlider';
import ReviewsSlider from '../components/ReviewsSlider';

const Home = () => {

  return (
    <StyledContentDiv>
      <MainVideoSlider />
      <ReviewsSlider />
    </StyledContentDiv>
  );
}

export default Home;