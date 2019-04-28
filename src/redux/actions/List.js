import Firebase from '../../firebase';
export const REQUEST_LIST = 'REQUEST_LIST';
export const RECEIVE_LIST = 'RECEIVE_LIST';

const requestList = () => ({ type: REQUEST_LIST });

const receiveList = json => ({
  type: RECEIVE_LIST,
  data: json,
  received: Date.now(),
});

// Thunk.
export const fetchList = () => async dispatch => {
  dispatch(requestList());
  const list = await Firebase.db.collection('movie-list').get();
  return dispatch(receiveList(list));
};

export const ADD_TO_LIST = 'ADD_TO_LIST';
export const ADDED_TO_LIST = 'ADDED_TO_LIST';
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST';
export const REMOVED_FROM_LIST = 'REMOVED_FROM_LIST';

const addToList = json => ({
  type: ADD_TO_LIST,
  data: json,
});

const removeFromList = docId => ({
  type: REMOVE_FROM_LIST,
  data: docId,
});

const removedFromList = docId => ({
  type: REMOVED_FROM_LIST,
  data: docId,
});

// Thunk
export const deleteMovieFromList = docId => async dispatch => {
  console.log(docId);
  dispatch(removeFromList(docId));

  const removed = await Firebase.db
    .collection('movie-list')
    .doc(docId)
    .delete();

  dispatch(removedFromList(docId));
};
