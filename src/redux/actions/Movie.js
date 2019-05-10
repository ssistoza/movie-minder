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
export const fetchMovies = page => async (dispatch, getState) => {
  dispatch(requestMovies());
  const url = `${process.env.REACT_APP_MOVIE_URL}&page=${page}`;
  const response = await fetch(url);
  const upcomingMovies = await response.json();
  dispatch(recieveMovies(upcomingMovies));
};

/* Customizations */
export const HIDE_MOVIES_INLIST = 'HIDE_MOVIES_INLIST';
const hideMoviesInList = movieIds => ({
  type: HIDE_MOVIES_INLIST,
  data: movieIds,
});

// Thunk
export const hideMovies = type => (dispatch, getState) => {
  const movieIds = getState().movieList.list.map(movie => movie.id);
  dispatch(hideMoviesInList(movieIds));
};

export const SET_PAGINATION_PAGE = 'SET_PAGINATION_PAGE';
export const setPaginationPage = page => ({
  type: SET_PAGINATION_PAGE,
  data: page,
});
