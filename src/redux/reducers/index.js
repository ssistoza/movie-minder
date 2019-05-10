import { combineReducers } from 'redux';
import { allMovies } from './Movie';
import { movieResults } from './Movie.search';
import { movieList } from './List';
import { authenticated } from './User';

const rootReducer = combineReducers({
  allMovies,
  movieList,
  movieResults,
  authenticated,
});

export default rootReducer;
