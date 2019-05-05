import {
  ADD_TO_LIST,
  ADDED_TO_LIST,
  REQUEST_LIST,
  RECEIVE_LIST,
  REMOVE_FROM_LIST,
  REMOVED_FROM_LIST,
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
      item.docId = action.data;
      return Object.assign({}, state, { list: [...list, item] });
    }
    default:
      return state;
  }
};
