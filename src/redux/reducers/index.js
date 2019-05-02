import { combineReducers } from 'redux';
import { allMovies } from './Movie';
import { movieList } from './List';
import { authenticated } from './User';

const rootReducer = combineReducers({
  allMovies,
  movieList,
  authenticated,
});

export default rootReducer;
