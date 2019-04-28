import { combineReducers } from 'redux';
import { upcomingMovies } from './Movie';
import { movieList } from './List';

const rootReducer = combineReducers({
  upcomingMovies,
  movieList,
});

export default rootReducer;
