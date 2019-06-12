import axios from 'axios';
export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const NO_MOVIES = 'NO_MOVIES';

/* Create in { CRUD } */
const requestMovies = page => ({ type: REQUEST_MOVIES, data: page });
const recieveMovies = json => ({
  type: RECEIVE_MOVIES,
  data: json,
  received: Date.now(),
});
const noMovies = () => ({ type: NO_MOVIES });

// Thunk
export const fetchMovies = page => async (dispatch, getState) => {
  try {
    dispatch(requestMovies(page));
    const response = await axios.get(process.env.REACT_APP_MOVIE_URL, {
      params: {page}
    });
    dispatch(recieveMovies(response.data));
  } catch (err) {
    // console.error('fetchMovies << ', err);
    dispatch(noMovies());
  }
};

/* Customizations */
export const HIDE_MOVIES_INLIST = 'HIDE_MOVIES_INLIST';
const hideMoviesInList = movieIds => ({
  type: HIDE_MOVIES_INLIST,
  data: movieIds,
});

// Thunk
export const hideMovies = () => (dispatch, getState) => {
  const movieIds = getState().movieList.list.map(movie => movie.id);
  dispatch(hideMoviesInList(movieIds));
};
