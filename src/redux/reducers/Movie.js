import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  SET_MOVIES_VISIBILITY,
  SET_PAGINATION_PAGE,
} from '../actions';

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

function setVisibilityFilter(state, action) {
  const list = action.data.map(i => i.id);
  let movies = state.movies.map(i =>
    list.includes(i.id)
      ? updateObject(i, { isHidden: true })
      : updateObject(i, { isHidden: false })
  ); // Regardless HIDE any movies part of the list.

  switch (action.visibility) {
    case 'SHOW_ALL':
      break;
    case 'SHOW_PAST':
      movies = movies.map(i => {
        if (!action.isUpcoming.filter(j => j.id === i.id).shift().isUpcoming) {
          return i;
        } else {
          if (i.isHidden) {
            return i;
          }
          return updateObject(i, { isHidden: true });
        }
      });
      break;
    case 'SHOW_UPCOMING':
    default:
      movies = movies.map(i => {
        if (action.isUpcoming.filter(j => j.id === i.id).shift().isUpcoming) {
          return i;
        } else {
          if (i.isHidden) {
            return i;
          }
          return updateObject(i, { isHidden: true });
        }
      });
  }
  return updateObject(state, {
    needsFiltering: false,
    movies,
    visibility: action.visibility,
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
    case SET_MOVIES_VISIBILITY:
      return setVisibilityFilter(state, action);
    case SET_PAGINATION_PAGE:
      return setPaginationPage(state, action);
    default:
      return state;
  }
};
