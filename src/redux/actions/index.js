import {
  ADD_TO_LIST,
  ADDED_TO_LIST,
  REQUEST_LIST,
  RECEIVE_LIST,
  REMOVE_FROM_LIST,
  REMOVED_FROM_LIST,
  SEARCH_LIST,
  SEARCHED_LIST,
  LIST_VISIBILITY,
} from './List';
import {
  addMovieToList,
  fetchList,
  deleteMovieFromList,
  searchList,
} from './List';
import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  SET_MOVIES_VISIBILITY,
  SET_PAGINATION_PAGE,
  MoviesVisibilityFilter,
} from './Movie';
import { fetchMovies, setMovieVisibility, setPaginationPage } from './Movie';
import { SIGN_IN, SIGNED_IN, SIGN_OUT, SIGNED_OUT } from './User';
import {
  signinWithFirebase,
  signoutWithFirebase,
  checkIfSignedIn,
} from './User';

/* Action Types */
export { REQUEST_MOVIES, RECEIVE_MOVIES };
export { ADD_TO_LIST, ADDED_TO_LIST };
export { REQUEST_LIST, RECEIVE_LIST };
export { REMOVE_FROM_LIST, REMOVED_FROM_LIST };
export { SET_MOVIES_VISIBILITY, MoviesVisibilityFilter };
export { SET_PAGINATION_PAGE };
export { SIGN_IN, SIGNED_IN, SIGN_OUT, SIGNED_OUT };
export { SEARCH_LIST, SEARCHED_LIST, LIST_VISIBILITY };
/* Action Creators */
// Create
export { addMovieToList };
// Retrieve
export { fetchList, fetchMovies };
// Update
// Delete
export { deleteMovieFromList };
// Custom
export { searchList };
export { setMovieVisibility, setPaginationPage };
export { signinWithFirebase, signoutWithFirebase, checkIfSignedIn };
