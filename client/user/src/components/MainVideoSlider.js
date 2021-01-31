import React from 'react';
//Components
import MainVideoSliderItem from '../components/MainVideoSliderItem';

const MainVideoSlider = () => {

  //Hardcoded movies
  const movies = [
    {
      movieTitle: "Men In Black",
      genre: "Action",
      year: "1997",
      description: "Men in Black is a 1997 American science fiction action comedy film directed by Barry Sonnenfeld, produced by Walter F. Parkes and Laurie MacDonald and written by Ed Solomon. Loosely based on The Men in Black comic book series created by Lowell Cunningham and Sandy Carruthers, the film stars Tommy Lee Jones and Will Smith as two agents of a secret organization called the Men in Black, who supervise extraterrestrial lifeforms who live on Earth and hide their existence from ordinary humans",
    },
    {
      movieTitle: "Fight Club",
      genre: "Thriller",
      year: "1999",
      description: "Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt, Edward Norton, and Helena Bonham Carter. It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a fight club with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with him and a destitute woman, Marla Singer (Bonham Carter).",
    },
    {
      movieTitle: "Alien",
      genre: "Science Fiction",
      year: "1979",
      description: "Alien is a 1979 science fiction horror film directed by Ridley Scott and written by Dan O'Bannon. Based on a story by O'Bannon and Ronald Shusett, it follows the crew of the commercial space tug Nostromo, who encounter the eponymous Alien, an aggressive and deadly extraterrestrial set loose on the ship",
    },
  ]

  return (
    < section id="home" className="iq-main-slider p-0" >
      <div id="home-slider" className="slider m-0 p-0">
        {/* Should render here a list of 10 movies components fitted to the slider instead of the 3 hardcoded movies here */}
        {movies.map((movie) => (
          <MainVideoSliderItem
            movieTitle={movie.movieTitle}
            genre={movie.genre}
            year={movie.year}
            description={movie.description}
          />
        ))}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44px" height="44px" id="circle" fill="none" stroke="currentColor">
          <circle r={20} cy={22} cx={22} id="test" />
        </symbol>
      </svg>
    </section >
  );
}

export default MainVideoSlider;