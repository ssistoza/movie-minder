import equals from 'validator/lib/equals';
import Firebase from '../../firebase';
import {
  SET_USERMOVIES_VISIBILITY,
  MoviesVisibilityFilter,
  setMovieVisibility,
} from './Filter';
import { hideMoviesInList } from './Movie';

/* Create in { CRUD } */
export const ADD_TO_LIST = 'ADD_TO_LIST';
export const ADDED_TO_LIST = 'ADDED_TO_LIST';
export const NOT_ADDED_TO_LIST = 'NOT_ADDED_TO_LIST';
const addToList = json => ({ type: ADD_TO_LIST, data: json });
const addedToList = docId => ({ type: ADDED_TO_LIST, data: docId });

// Thunk
export const addMovieToList = newMovie => async (dispatch, getState) => {
  dispatch(addToList(newMovie));

  const response = await Firebase.db
    .collection('movie-list')
    .add({ ...newMovie });

  dispatch(addedToList(response.id));

  dispatch(
    setMovieVisibility(
      SET_USERMOVIES_VISIBILITY,
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
  if (!getState().movieList.isFetching) {
    // Already fetched!
    return Promise.resolve();
  }
  dispatch(requestList());
  const list = await Firebase.db.collection('movie-list').get();
  dispatch(receiveList(list));
};

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
      SET_USERMOVIES_VISIBILITY,
      MoviesVisibilityFilter.SHOW_ALL,
      getState().movieList.list
    )
  );

  return removed;
};

export const SEARCH_LIST = 'SEARCH_LIST';
export const SEARCHED_LIST = 'SEARCHED_LIST';
export const SET_USERWATCHED_VISIBILITY = 'SET_USERWATCHED_VISIBILITY';

export const WatchedVisibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_WATCHED: 'SHOW_WATCHED',
  SHOW_UNWATCHED: 'SHOW_UNWATCHED',
};

const setWatchedVisibility = ({ watched, notWatched }) => {
  let watchedVisibility = WatchedVisibilityFilter.SHOW_ALL;
  if (!watched && notWatched) {
    watchedVisibility = WatchedVisibilityFilter.SHOW_UNWATCHED;
  } else if (watched && !notWatched) {
    watchedVisibility = WatchedVisibilityFilter.SHOW_WATCHED;
  }

  return {
    type: SET_USERWATCHED_VISIBILITY,
    watchedVisibility,
  };
};

export const filterList = filter => {
  return async (dispatch, getState) => {
    const { search, movieFilter, watched, notWatched } = filter;

    if (search && movieFilter) {
      // Sets searchText;
      if (search.length > 1) {
        console.log('searching...');
      }
    }

    // Reset List Visibility => Returns isHidden all to false.
    await dispatch(resetListVisibility());

    // Then set Movie Visibillity.
    await dispatch(
      setMovieVisibility(
        SET_USERMOVIES_VISIBILITY,
        movieFilter,
        getState().movieList.list
      )
    );

    // Sets Watched Visibility
    await dispatch(setWatchedVisibility({ watched, notWatched }));
  };
};

export const resetListVisibility = () => (dispatch, getState) =>
  dispatch(
    setMovieVisibility(
      SET_USERMOVIES_VISIBILITY,
      'SHOW_ALL',
      getState().movieList.list
    )
  );

export const TOGGLE_WATCHED = 'TOGGLE_WATCHED';

const toggleMovie = (docId, watched) => ({
  type: TOGGLE_WATCHED,
  data: { docId, watched },
});

export const setToggleMovie = (docId, watched) => {
  return async (dispatch, getState) => {
    dispatch(toggleMovie(docId, watched));
    await Firebase.db
      .collection('movie-list')
      .doc(docId)
      .set({ watched }, { merge: true });
  };
};
