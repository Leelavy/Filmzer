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
  const user = await axios.get(userByEmailURL(email));
  const pass = user.data[0].password;
  if (pass === password) {
    dispatch({
      type: "SIGN_IN",
      payload: {
        isLogged: true,
        user: user.data[0],
      },
    });
  }
};

export const signUp = (firstName, lastName, username, email, password) => async (dispatch) => {
  const response = await axios.post(
    usersURL(),
    {
      firstName,
      lastName,
      username,
      email,
      password,
    }
  );
  if (response.statusText === "OK") {
    dispatch({
      type: "SIGN_IN",
      payload: {
        isLogged: true,
        user: response.data,
      },
    });
  }
  console.log(response);
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