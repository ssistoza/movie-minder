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
    case 'SEARCH_SUCCESS': {
      let arrayOfData = action.data.results;
      arrayOfData = arrayOfData.map(i => ({
        ...i,
        isHidden: false,
      }));

      return updateObject(state, {
        movies: [...arrayOfData],
        apiPage: action.data.page,
        totalPage: action.data.total_pages,
        totalResults: action.data.total_results,
        lastUpdated: action.received,
      });
    }
    case 'HIDE_MOVIES_AFTER_SEARCH': {
      let movies = state.movies.map(i =>
        action.data.includes(i.id)
          ? updateObject(i, { isHidden: true })
          : updateObject(i, { isHidden: false })
      );
      return updateObject(state, { movies });
    }
    default:
      return state;
  }
};
