import React, { useState, useEffect } from 'react';
//Redux data and actions
import { useDispatch, useSelector } from 'react-redux';
import { loadAllMovies } from '../redux/actions/moviesActions'
//Routing
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
//Modal Video
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';

const Movies = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [movieTrailerId, setMovieTrailerId] = useState("");

  const allMovies = useSelector(state => state.movies.allMovies);

  const handleWatchClick = (movie) => {
    if (movie) {
      let trailerId = movie.trailer_video.split('v=')[1];
      const ampersandPosition = trailerId.indexOf('&');
      if (ampersandPosition !== -1) {
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
          {allMovies && (Object.values(allMovies).map((movie) => (
            <StyledLink to={`/movies/${movie._id}`}>
              <MovieCard movie={movie} onWatchClick={handleWatchClick} key={movie._id} />
            </StyledLink>
          )))}
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