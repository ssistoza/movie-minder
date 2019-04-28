import { REQUEST_LIST, RECEIVE_LIST } from '../actions/List';

export const movieList = (state = { list: [] }, action) => {
  switch (action.type) {
    case REQUEST_LIST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_LIST:
      let list = [];

      action.data &&
        action.data.forEach(doc => {
          list = [...list, doc.data()];
        });

      return Object.assign({}, state, {
        list,
        isFetching: false,
        lastUpdated: action.received,
      });
    default:
      return state;
  }
};
