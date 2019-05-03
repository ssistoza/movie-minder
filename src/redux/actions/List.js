import Firebase from '../../firebase';
import { setMovieVisibility, MoviesVisibilityFilter } from './';

/* Create in { CRUD } */
export const ADD_TO_LIST = 'ADD_TO_LIST';
export const ADDED_TO_LIST = 'ADDED_TO_LIST';
export const NOT_ADDED_TO_LIST = 'NOT_ADDED_TO_LIST';

const addToList = json => ({
  type: ADD_TO_LIST,
  data: json,
});

const addedToList = docId => ({
  type: ADDED_TO_LIST,
  data: docId,
});

// const notAddedToList = error => ({
//   type: NOT_ADDED_TO_LIST,
//   data: error,
// });

// Thunk
export const addMovieToList = newMovie => async (dispatch, getState) => {
  dispatch(addToList(newMovie));
  const response = await Firebase.db
    .collection('movie-list')
    .add({ ...newMovie });
  dispatch(addedToList(response.id));
  dispatch(
    setMovieVisibility(
      MoviesVisibilityFilter.SHOW_ALL,
      getState().movieList.list
    )
  );
  return response;
};

/* Retrieve in { CRUD } */
export const REQUEST_LIST = 'REQUEST_LIST';
export const RECEIVE_LIST = 'RECEIVE_LIST';

const requestList = () => ({ type: REQUEST_LIST });

const receiveList = json => ({
  type: RECEIVE_LIST,
  data: json,
  received: Date.now(),
});

// Thunk.
export const fetchList = () => async (dispatch, getState) => {
  dispatch(requestList());
  const list = await Firebase.db.collection('movie-list').get();
  dispatch(receiveList(list));
  dispatch(
    setMovieVisibility(
      MoviesVisibilityFilter.SHOW_ALL,
      getState().movieList.list
    )
  );
  return list;
};

/* Update in { CRUD } */

/* Delete in { CRUD } */
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST';
export const REMOVED_FROM_LIST = 'REMOVED_FROM_LIST';
const removeFromList = docId => ({
  type: REMOVE_FROM_LIST,
  data: docId,
});

const removedFromList = docId => ({
  type: REMOVED_FROM_LIST,
  data: docId,
});

// Thunk
export const deleteMovieFromList = docId => async (dispatch, getState) => {
  dispatch(removeFromList(docId));

  const removed = await Firebase.db
    .collection('movie-list')
    .doc(docId)
    .delete();

  dispatch(removedFromList(docId));
  dispatch(
    setMovieVisibility(
      MoviesVisibilityFilter.SHOW_ALL,
      getState().movieList.list
    )
  );

  return removed;
};
