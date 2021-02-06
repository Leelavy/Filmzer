import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
//Modal Video
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';

const Movies = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [movieTrailerId, setMovieTrailerId] = useState("");

  const handleWatchClick = (movie) => {
    if (movie) {
      const trailerId = movie.trailerUrl.split('v=')[1];
      const ampersandPosition = trailerId.indexOf('&');
      if (ampersandPosition != -1) {
        trailerId = trailerId.substring(0, ampersandPosition);
      }
      setMovieTrailerId(trailerId);
      setIsOpenModal(true);
    }
  }

  return (
    <>
      <Loader />
      <StyledMotionDiv
        variants={pageAnimationFromBottom}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {movieTrailerId && (
          <ModalVideo channel='youtube' autoplay isOpen={isOpenModal} videoId={movieTrailerId} onClose={() => setIsOpenModal(false)} />
        )}
        <MoviesGrid>
          {movies.map((movie) => (
            <StyledLink to={`/movies/${movie.movieTitle}`}>
              <MovieCard movie={movie} onWatchClick={handleWatchClick} />
            </StyledLink>
          ))}
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Movies;