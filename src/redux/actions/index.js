import { REQUEST_LIST, RECEIVE_LIST } from './List';
import { fetchUpcomingMovies } from './Movie';
import {
  fetchList,
  deleteMovieFromList,
  REMOVE_FROM_LIST,
  REMOVED_FROM_LIST,
} from './List';
import { REQUEST_MOVIES, RECEIVE_MOVIES } from './Movie';

// action types
export { REQUEST_MOVIES, RECEIVE_MOVIES };
export { fetchUpcomingMovies };

export { REQUEST_LIST, RECEIVE_LIST };
export { REMOVE_FROM_LIST, REMOVED_FROM_LIST };

// thunk actions
export { fetchList, deleteMovieFromList };
