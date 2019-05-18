export const SEARCH_MOVIES = 'SEARCH_MOVIES';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const HIDE_MOVIES_AFTER_SEARCH = 'HIDE_MOVIES_AFTER_SEARCH';

const searchMovies = text => ({ type: SEARCH_MOVIES, data: text });
export const searchSuccess = results => ({
  type: SEARCH_SUCCESS,
  data: results,
  received: Date.now(),
});

export const clearSearch = () => ({ type: CLEAR_SEARCH });

export const fetchSearchMovie = newSearch => async (dispatch, getState) => {
  let text = getState().movieResults.searchText;

  if (newSearch) {
    await dispatch(clearSearch()); // should reset getState!
    text = newSearch;
  }

  let page = getState().movieResults.apiPage;
  if (page < getState().movieResults.totalPage || page === 0) {
    // if any pages avail or the very first one.
    page++;
    dispatch(searchMovies(text));
    const response = await fetch(
      `${process.env.REACT_APP_MOVIE_SEARCH}&query=${text}&page=${page}`
    );
    const movieResults = await response.json();

    await dispatch(searchSuccess(movieResults));
    dispatch(hideMoviesAfterSearch());
  }
};

const hideMoviesInList = movieIds => ({
  type: HIDE_MOVIES_AFTER_SEARCH,
  data: movieIds,
});

export const hideMoviesAfterSearch = () => (dispatch, getState) => {
  const movieIds = getState().movieList.list.map(movie => movie.id);
  dispatch(hideMoviesInList(movieIds));
};
