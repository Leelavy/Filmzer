import axios from 'axios';
import {
  usersURL,
  usersByParamsURL,
  updateReviewByUserIdURL,
  usersCountURL,
  userByUserNameURL,
  userByUserIdURL
} from '../../api/users';

//Action creator - async using thunk

export const signIn = (email, password) => async (dispatch) => {
  //should change it to userbyemail and then check if exists and if password is right
  const allUsers = await axios.get(usersURL());
  console.log(allUsers);
  dispatch({
    type: "SIGN_IN",
    payload: {
      user: allUsers.data,
    },
  });
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