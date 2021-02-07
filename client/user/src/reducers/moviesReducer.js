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
    default:
      return { ...state };
  }
}

export default moviesReducer;