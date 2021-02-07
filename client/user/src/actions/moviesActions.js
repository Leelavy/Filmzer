import axios from 'axios';
import { moviesURL, movieByIdURL, topMoviesURL, moviesByTitleURL, movieByParamsURL } from '../api/movies';

//Action creator - async using thunk

export const loadAllMovies = () => async (dispatch) => {
  //FETCH AXIOS
  const allMoviesData = await axios.get(moviesURL());
  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      allMovies: allMoviesData,
    },
  });
};
