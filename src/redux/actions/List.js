import Firebase from '../../firebase';
export const REQUEST_LIST = 'REQUEST_LIST';
export const RECEIVE_LIST = 'RECEIVE_LIST';

const requestList = () => ({ type: REQUEST_LIST });

const receiveList = json => ({
  type: RECEIVE_LIST,
  data: json,
  received: Date.now(),
});

export const ADD_TO_LIST = 'ADD_TO_LIST';

const addToList = json => ({
  type: ADD_TO_LIST,
  data: json,
});

// Thunk.
export const fetchList = () => async dispatch => {
  dispatch(requestList());
  const list = await Firebase.db.collection('movie-list').get();
  return dispatch(receiveList(list));
};
