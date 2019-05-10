import { updateObject } from '../../helper';

const INITIAL_STATE = {
  searchText: '',
  isSearching: false,
  apiPage: 0,
  paginationPage: 1,
  movies: [],
};

export const movieResults = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES':
      return updateObject(state, { searchText: action.data });
    case 'SEARCH_SUCCESS':
      return updateObject(state, {
        movies: [...action.data.results],
        apiPage: action.data.page,
        totalPage: action.data.total_pages,
        lastUpdated: action.received,
      });
    default:
      return state;
  }
};
