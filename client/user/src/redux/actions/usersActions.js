import axios from 'axios';
import {
  usersURL,
  usersByParamsURL,
  updateReviewByUserIdURL,
  usersCountURL,
  userByUserNameURL,
  userByUserIdURL,
  userByEmailURL,
} from '../../api/users';

//Action creator - async using thunk

export const signIn = (email, password) => async (dispatch) => {
  const user = await (await axios.get(userByEmailURL(email))).data[0];
  if (user.password === password) {
    dispatch({
      type: "SIGN_IN",
      payload: {
        isLogged: true,
        user: user,
      },
    });
  }
};

export const signOut = () => async (dispatch) => {
  dispatch({
    type: "SIGN_OUT",
    payload: {
      isLogged: false,
      user: {},
    },
  });
};