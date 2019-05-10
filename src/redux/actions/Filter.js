import { isUpcomingDate } from '../../helper';
export const SET_MOVIES_VISIBILITY = 'SET_MOVIES_VISIBILITY';
export const SET_USERMOVIES_VISIBILITY = 'SET_USERMOVIES_VISIBILITY';

export const MoviesVisibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_UPCOMING: 'SHOW_UPCOMING',
  SHOW_PAST: 'SHOW_PAST',
};

const visibilitySet = (action, visibility, isUpcoming) => ({
  type: action,
  movieVisibility: visibility,
  isUpcoming,
});

export const setMovieVisibility = (action, visibility, movies) => {
  return dispatch => {
    const isUpcoming = movies.map(movie => ({
      id: movie.id,
      isUpcoming: isUpcomingDate(movie.release_date),
    }));

    dispatch(visibilitySet(action, visibility, isUpcoming));
  };
};
