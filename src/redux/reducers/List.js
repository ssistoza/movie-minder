import {
  ADD_TO_LIST,
  ADDED_TO_LIST,
  REQUEST_LIST,
  RECEIVE_LIST,
  REMOVE_FROM_LIST,
  REMOVED_FROM_LIST,
  SEARCH_LIST,
  TOGGLE_WATCHED,
  SET_USERMOVIES_VISIBILITY,
  SET_USERWATCHED_VISIBILITY,
} from '../actions';

import { movieVisibility } from './Filter';
import { updateObject } from '../../helper';

const INITIAL_STATE = { list: [], isFetching: true, paginationPage: 1 };

function receivedList(state, action) {
  let list = [];

  action.data &&
    action.data.forEach(doc => {
      list = [...list, { docId: doc.id, ...doc.data() }];
    });

  return updateObject(state, {
    list,
    isFetching: false,
    lastUpdated: action.received,
  });
}

function removedFromList(state, action) {
  const list = state.list.filter(movie => movie.docId !== action.data);
  return updateObject(state, { list });
}

function watchedVisibility(state, action) {
  let list = state.list;
  switch (action.watchedVisibility) {
    case 'SHOW_UNWATCHED':
      list = list.map(movie => {
        if (movie.watched && !movie.isHidden) {
          return updateObject(movie, { isHidden: true });
        } else {
          return movie;
        }
      });
      return updateObject(state, {
        list,
        watchedVisibility: action.watchedVisibility,
      });
    case 'SHOW_WATCHED':
      list = list.map(movie => {
        if (!movie.watched && !movie.isHidden) {
          return updateObject(movie, { isHidden: true });
        } else {
          return movie;
        }
      });
      return updateObject(state, {
        list,
        watchedVisibility: action.watchedVisibility,
      });
    case 'SHOW_ALL':
      return updateObject(state, {
        watchedVisibility: action.watchedVisibility,
      });
    default:
      return state;
  }
}

function filterList(state, action) {
  let list = state.list.map(movie => updateObject(movie, { isHidden: false }));
  let newState = updateObject(state, { list });

  if (action.watchedVisibility) {
    newState = watchedVisibility(newState, action);
  }

  return newState;
}

export const movieList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_LIST:
      return updateObject(state, { isFetching: true });
    case RECEIVE_LIST:
      return receivedList(state, action);
    case REMOVE_FROM_LIST:
    case REMOVED_FROM_LIST:
      return removedFromList(state, action);
    case ADD_TO_LIST: {
      // Optimistic ==> At this time no-idea of docId.
      const list = [...state.list, { docId: 'awaiting', ...action.data }];
      return updateObject(state, { list });
    }
    case ADDED_TO_LIST: {
      // Update docId.
      const list = state.list.filter(movie => movie.docId !== 'awaiting');
      let item = state.list.find(movie => movie.docId === 'awaiting');
      item = updateObject(item, { docId: action.data });
      return updateObject(state, { list: [...list, item] });
    }
    case SEARCH_LIST:
      return filterList(state, action);
    case TOGGLE_WATCHED: {
      let list = state.list.filter(movie => movie.docId !== action.data.docId);
      let item = state.list.find(movie => movie.docId === action.data.docId);
      item = updateObject(item, { watched: action.data.watched });
      list = list.concat(item);

      return updateObject(state, { list: list });
    }
    case SET_USERMOVIES_VISIBILITY: {
      let list = state.list;
      list = movieVisibility(list, action);
      return updateObject(state, {
        list,
        movieVisibility: action.movieVisibility,
      });
    }
    case SET_USERWATCHED_VISIBILITY:
      return watchedVisibility(state, action);
    default:
      return state;
  }
};
