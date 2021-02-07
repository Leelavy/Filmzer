const initState = {
  isLogged: false,
  user: {}
}

const userReducer = (state = initState, action) => {
  switch (action.type) {

    case "SIGN_IN":
      return {
        isLogged: true,
        user: action.payload.user,
      };
    case "SIGN_OUT":
      return {
        isLogged: false,
        user: {},
      };
    default:
      return { ...state };
  }
}

export default userReducer;