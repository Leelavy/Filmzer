const initState = {
  allMovies: [],
  topMovies: [],
}

const moviesReducer = (state = initState, action) => {
  switch (action.type) {

    case "FETCH_MOVIES":
      return {
        ...state,
        allMovies: action.payload.allMovies,
      };
    case "FETCH_TOP_MOVIES":
      return {
        ...state,
        topMovies: action.payload.topMovies,
      };
    default:
      return { ...state };
  }
}

export default moviesReducer;