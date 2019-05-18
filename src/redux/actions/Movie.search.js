export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const HIDE_MOVIES_AFTER_SEARCH = 'HIDE_MOVIES_AFTER_SEARCH';

const searchMovies = text => ({ type: SEARCH_MOVIES, data: text });
export const searchSuccess = results => ({
  type: SEARCH_SUCCESS,
  data: results,
  received: Date.now(),
});

export const fetchSearchMovie = text => async (dispatch, getState) => {
  dispatch(searchMovies(text));
  const url = `${process.env.REACT_APP_MOVIE_SEARCH}&query="${text}"`;
  const response = await fetch(url);
  const movieResults = await response.json();

  await dispatch(searchSuccess(movieResults));
  dispatch(hideMoviesAfterSearch());
};

export const fetchNextPage = page => async (dispatch, getState) => {
  const text = getState().movieResults.searchText;

  dispatch(searchMovies(text));
  const url = `${
    process.env.REACT_APP_MOVIE_SEARCH
  }&query=${text}&page=${page}`;
  const response = await fetch(url);
  const movieResults = await response.json();

  await dispatch(searchSuccess(movieResults));
  dispatch(hideMoviesAfterSearch());
};

const hideMoviesInList = movieIds => ({
  type: HIDE_MOVIES_AFTER_SEARCH,
  data: movieIds,
});

export const hideMoviesAfterSearch = () => (dispatch, getState) => {
  const movieIds = getState().movieList.list.map(movie => movie.id);
  dispatch(hideMoviesInList(movieIds));
};
