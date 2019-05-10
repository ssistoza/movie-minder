import {
  fetchList,
  fetchMovies,
  resetListVisibility,
  SET_USERMOVIES_VISIBILITY,
  MoviesVisibilityFilter,
  hideMovies,
} from './index';

export const init = () => async (dispatch, getState) => {
  // 1. Get list of User.
  await dispatch(fetchList());
  // 2. Get first of Movies.
  await dispatch(fetchMovies());

  // 3. Hide Movies in User's list.
  await dispatch(hideMovies());

  // 4. Reset Visibility of Movie List.
  await dispatch(resetListVisibility());
};
