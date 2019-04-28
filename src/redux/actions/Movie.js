import Firebase from '../../firebase';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

/* Create in { CRUD } */
const requestMovies = page => ({ type: REQUEST_MOVIES, data: page });
const recieveMovies = json => ({
  type: RECEIVE_MOVIES,
  data: json,
  received: Date.now(),
});

// Thunk
export const fetchMovies = page => async dispatch => {
  dispatch(requestMovies());
  const url = `${process.env.REACT_APP_MOVIE_UPCOMING_URL}&page=${page}`;
  const response = await fetch(url);
  const upcomingMovies = await response.json();
  dispatch(recieveMovies(upcomingMovies));
};

/* Retreive in { CRUD } */
/* Update in { CRUD } */
/* Delete in { CRUD } */

/* Customizations */
export const SET_MOVIES_VISIBILITY = 'SET_MOVIES_VISIBILITY';
export const MoviesVisibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_UPCOMING: 'SHOW_UPCOMING',
  SHOW_IN_LIST: 'SHOW_IN_LIST',
  SHOW_NOT_IN_LIST: 'SHOW_NOT_IN_LIST',
  SHOW_UPCOMING_NOT_IN_LIST: 'SHOW_UPCOMING_NOT_IN_LIST',
};

export const setMovieVisibility = (visibility, list) => ({
  type: SET_MOVIES_VISIBILITY,
  visibility,
  data: list,
  date: Date.now(),
});
