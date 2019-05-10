export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';

const searchMovies = text => ({ type: SEARCH_MOVIES, data: text });
export const searchSuccess = (results, toHide) => ({
  type: SEARCH_SUCCESS,
  data: results,
  toHide,
  received: Date.now(),
});

export const fetchSearchMovie = (text, page) => async (dispatch, getState) => {
  dispatch(searchMovies(text));
  const url = `${process.env.REACT_APP_MOVIE_SEARCH}&query=${text}&${page}`;
  const response = await fetch(url);
  const movieResults = await response.json();

  const movieIds = getState().movieList.list.map(movie => movie.id);
  dispatch(searchSuccess(movieResults, movieIds));
};
