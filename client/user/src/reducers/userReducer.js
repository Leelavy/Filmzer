const initState = {
  isLogged: false,
  user: {}
}

const userReducer = (state = initState, action) => {
  switch (action.type) {

    case "LOG_IN":
      return {
        isLogged: true,
        user: action.payload.user,
      };
    default:
      return { ...state };
  }
}

export default userReducer;