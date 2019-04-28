import {
  ADD_TO_LIST,
  ADDED_TO_LIST,
  REQUEST_LIST,
  RECEIVE_LIST,
  REMOVE_FROM_LIST,
  REMOVED_FROM_LIST,
} from '../actions';

export const movieList = (state = { list: [] }, action) => {
  switch (action.type) {
    case REQUEST_LIST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_LIST: {
      let list = [];

      action.data &&
        action.data.forEach(doc => {
          list = [...list, { docId: doc.id, ...doc.data() }];
        });

      return Object.assign({}, state, {
        list,
        isFetching: false,
        lastUpdated: action.received,
      });
    }
    case REMOVE_FROM_LIST:
    case REMOVED_FROM_LIST: {
      const list = state.list.filter(movie => movie.docId !== action.data);
      return Object.assign({}, state, {
        list,
      });
    }
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
