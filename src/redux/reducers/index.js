import { combineReducers } from 'redux';
import { allMovies } from './Movie';
import { movieList } from './List';

const rootReducer = combineReducers({
  allMovies,
  movieList,
});

export default rootReducer;
