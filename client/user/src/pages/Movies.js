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


const Movies = () => {

  const movies = [
    {
      movieTitle: "Men In Black",
      genre: "Action",
      year: "1997",
      description: "Men in Black is a 1997 American science fiction action comedy film directed by Barry Sonnenfeld, produced by Walter F. Parkes and Laurie MacDonald and written by Ed Solomon. Loosely based on The Men in Black comic book series created by Lowell Cunningham and Sandy Carruthers, the film stars Tommy Lee Jones and Will Smith as two agents of a secret organization called the Men in Black, who supervise extraterrestrial lifeforms who live on Earth and hide their existence from ordinary humans",
      imageUrl: "https://e3.365dm.com/19/10/768x432/skynews-men-in-black-will-smith_4806529.jpg?20191016105928",
    },
    {
      movieTitle: "Fight Club",
      genre: "Thriller",
      year: "1999",
      description: "Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt, Edward Norton, and Helena Bonham Carter. It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a fight club with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with him and a destitute woman, Marla Singer (Bonham Carter).",
      imageUrl: "https://www.denofgeek.com/wp-content/uploads/2014/10/fight-club-movie-david-fincher.jpg?fit=1000%2C563",
    },
    {
      movieTitle: "Alien",
      genre: "Science Fiction",
      year: "1979",
      description: "Alien is a 1979 science fiction horror film directed by Ridley Scott and written by Dan O'Bannon. Based on a story by O'Bannon and Ronald Shusett, it follows the crew of the commercial space tug Nostromo, who encounter the eponymous Alien, an aggressive and deadly extraterrestrial set loose on the ship",
      imageUrl: "https://www.slashgear.com/wp-content/uploads/2019/09/alien_1979_main.jpg",
    },
  ]

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Movies;