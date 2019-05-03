import { isUpcomingDate } from '../../helper';

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
  console.log(process.env.REACT_APP_MOVIE_UPCOMING_URL);
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
  SHOW_PAST: 'SHOW_PAST',
};

const visibilitySet = (visibility, list, isUpcoming) => ({
  type: SET_MOVIES_VISIBILITY,
  visibility,
  data: list,
  isUpcoming,
});

export const setMovieVisibility = (visibility, list) => {
  return (dispatch, getState) => {
    const isUpcoming = getState().allMovies.movies.map(movie => ({
      id: movie.id,
      isUpcoming: isUpcomingDate(Date.now(), movie.release_date),
    }));

    dispatch(visibilitySet(visibility, list, isUpcoming));
  };
};

export const SET_PAGINATION_PAGE = 'SET_PAGINATION_PAGE';
export const setPaginationPage = page => ({
  type: SET_PAGINATION_PAGE,
  data: page,
});
