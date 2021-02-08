import React from 'react';
//Styles
import styled from 'styled-components';
//Animation
import { motion } from 'framer-motion';

const ReviewFeedItem = ({ review }) => {

  if (!review) {
    return "";
  }

  console.log(review);

  return (
    <>
      {review.user && (
        <StyledContainer>
          <StyledReviewHeader>
            <motion.div>
              <motion.h1>{review.reviewTitle}</motion.h1>
              <StyledRatingDiv>
                {`${review.rating}/10`}
              </StyledRatingDiv>
            </motion.div>
            <motion.h5>{`By ${review.user.username}`}</motion.h5>
          </StyledReviewHeader>
          <StyledReviewContent>
            <motion.p>{review.reviewContent}</motion.p>
          </StyledReviewContent>
        </StyledContainer>
      )}
    </>
  );
}

const StyledContainer = styled(motion.div)`
        
    width: 100%;
    min-width: 200px;
    padding: 2rem;
    margin: 2rem 0;
    background-color: #141414;
    border-radius: 5px;
`;

const StyledReviewHeader = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  div {
    display: flex;
  }
  h5 {
    color: #ececec;
    font-weight: lighter;
    letter-spacing: 0.1rem;
  }
`;

const StyledReviewContent = styled(motion.div)`
  display: flex;
  p {
    font-size: 1rem;
  }
`;

const StyledRatingDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 1rem;
  margin-left: 1.5rem;
  background-color: red;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.2rem;
`;
export default ReviewFeedItem;