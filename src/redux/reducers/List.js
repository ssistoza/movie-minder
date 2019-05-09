import {
  ADD_TO_LIST,
  ADDED_TO_LIST,
  REQUEST_LIST,
  RECEIVE_LIST,
  REMOVE_FROM_LIST,
  REMOVED_FROM_LIST,
  SEARCH_LIST,
  TOGGLE_WATCHED,
} from '../actions';

import { updateObject } from '../../helper';

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

function movieVisibility(state, action) {
  let list = state.list;
  switch (action.movieVisibility) {
    case 'SHOW_UPCOMING':
      list = list.map(movie => {
        if (
          action.isUpcoming.filter(i => movie.id === i.id).shift().isUpcoming
        ) {
          return updateObject(movie, { isHidden: false });
        } else {
          return updateObject(movie, { isHidden: true });
        }
      });
      return updateObject(state, {
        list,
        movieVisibility: action.movieVisibility,
      });
    case 'SHOW_PAST':
      list = list.map(movie => {
        if (
          action.isUpcoming.filter(i => movie.id === i.id).shift().isUpcoming
        ) {
          return updateObject(movie, { isHidden: true });
        } else {
          return updateObject(movie, { isHidden: false });
        }
      });
      return updateObject(state, {
        list,
        movieVisibility: action.movieVisibility,
      });
    case 'SHOW_ALL':
      return updateObject(state, {
        list,
        movieVisibility: action.movieVisibility,
      });
    default:
      return state;
  }
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
        list,
        movieVisibility: action.movieVisibility,
      });
    default:
      return state;
  }
}

function filterList(state, action) {
  let list = state.list.map(movie => updateObject(movie, { isHidden: false }));
  let newState = updateObject(state, { list });

  if (action.movieVisibility) {
    newState = movieVisibility(newState, action);
  }
  if (action.watchedVisibility) {
    newState = watchedVisibility(newState, action);
  }

  return newState;
}

export const movieList = (state = { list: [], isFetching: true }, action) => {
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
      return Object.assign({}, state, { list });
    }
    case ADDED_TO_LIST: {
      // Update docId.
      const list = state.list.filter(movie => movie.docId !== 'awaiting');
      let item = state.list.find(movie => movie.docId === 'awaiting');
      item = updateObject(item, { docId: action.data });
      return Object.assign({}, state, { list: [...list, item] });
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
    default:
      return state;
  }
};
