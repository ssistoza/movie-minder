import { REQUEST_MOVIES, RECEIVE_MOVIES } from '../actions';

export const upcomingMovies = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_MOVIES:
      let arrayOfData = action.data.results;
      arrayOfData.map(i => ({
        ...i,
        hidden: false,
      }));

      return Object.assign({}, state, {
        isFetching: false,
        lastUpdated: action.received,
        movies: arrayOfData,
        page: action.data.page,
        totalPage: action.data.total_page,
      });

    default:
      return state;
  }
};
