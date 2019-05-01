import {
  ADD_TO_LIST,
  ADDED_TO_LIST,
  REQUEST_LIST,
  RECEIVE_LIST,
  REMOVE_FROM_LIST,
  REMOVED_FROM_LIST,
} from './List';
import { addMovieToList, fetchList, deleteMovieFromList } from './List';
import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  SET_MOVIES_VISIBILITY,
  SET_PAGINATION_PAGE,
  MoviesVisibilityFilter,
} from './Movie';
import { fetchMovies, setMovieVisibility, setPaginationPage } from './Movie';

/* Action Types */
export { REQUEST_MOVIES, RECEIVE_MOVIES };
export { ADD_TO_LIST, ADDED_TO_LIST };
export { REQUEST_LIST, RECEIVE_LIST };
export { REMOVE_FROM_LIST, REMOVED_FROM_LIST };
export { SET_MOVIES_VISIBILITY, MoviesVisibilityFilter };
export { SET_PAGINATION_PAGE };

/* Action Creators */
// Create
export { addMovieToList };
// Retrieve
export { fetchList, fetchMovies };
// Update
// Delete
export { deleteMovieFromList };
// Custom
export { setMovieVisibility, setPaginationPage };
