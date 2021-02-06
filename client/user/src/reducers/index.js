import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import userReducer from './userReducer';

//combines multiple reducers
const rootReucer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
})

export default rootReucer;