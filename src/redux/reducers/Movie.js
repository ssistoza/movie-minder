import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  SET_MOVIES_VISIBILITY,
  SET_PAGINATION_PAGE,
  HIDE_MOVIES_INLIST,
} from '../actions';
import { movieVisibility } from './Filter';
import { updateObject } from '../../helper';

const INITIAL_STATE = {
  isFetching: true,
  apiPage: 1,
  paginationPage: 1,
  movies: [],
};

function receivedMovies(state, action) {
  let arrayOfData = action.data.results;
  arrayOfData = arrayOfData.map(i => ({
    ...i,
    isHidden: false,
  }));

  return updateObject(state, {
    needsFiltering: true,
    isFetching: false,
    lastUpdated: action.received,
    movies: [...state.movies, ...arrayOfData],
    apiPage: action.data.page,
    totalPage: action.data.total_pages,
  });
}

function setPaginationPage(state, action) {
  return updateObject(state, { paginationPage: action.data });
}

export const allMovies = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return updateObject(state, { isFetching: true });
    case RECEIVE_MOVIES:
      return receivedMovies(state, action);
    case SET_MOVIES_VISIBILITY: {
      let movies = state.movies;
      movies = movieVisibility(movies, action);
      return updateObject(state, {
        movies,
        movieVisibility: action.movieVisibility,
      });
    }
    case SET_PAGINATION_PAGE:
      return setPaginationPage(state, action);
    case HIDE_MOVIES_INLIST: {
      let movies = state.movies.map(i =>
        action.data.includes(i.id)
          ? updateObject(i, { isHidden: true })
          : updateObject(i, { isHidden: false })
      ); // Regardless HIDE any movies part of the list.
      return updateObject(state, { movies });
    }
    default:
      return state;
  }
};
