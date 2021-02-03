import React from 'react';
//Styles
import { StyledMotionDiv } from '../styles/styles';
import styled from 'styled-components';
//Components
import Loader from '../components/Loader';
import ReviewCard from '../components/ReviewCard';
//Animation 
import { pageAnimationFromBottom } from '../styles/animation';
import { motion } from 'framer-motion';
//Dummy Data
import { reviews } from '../dummyData';

const Reviews = () => {

  return (
    <>
      <Loader />
      <StyledMotionDiv
        variants={pageAnimationFromBottom}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <ReviewsGrid>
          {reviews.map((review) => (<ReviewCard review={review} />))}
        </ReviewsGrid>
      </StyledMotionDiv>
    </>
  );
}

const ReviewsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 4rem;
`;

export default Reviews;