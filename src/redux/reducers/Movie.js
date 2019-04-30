import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  SET_MOVIES_VISIBILITY,
} from '../actions';

export const allMovies = (
  state = {
    isFetching: true,
    page: 1,
    movies: [],
  },
  action
) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_MOVIES: {
      let arrayOfData = action.data.results;

      arrayOfData = arrayOfData.map(i => ({
        ...i,
        isHidden: false,
      }));

      return Object.assign({}, state, {
        needsFiltering: true,
        isFetching: false,
        lastUpdated: action.received,
        movies: [...state.movies, ...arrayOfData],
        page: action.data.page,
        totalPage: action.data.total_page,
      });
    }
    case SET_MOVIES_VISIBILITY: {
      const list = action.data.map(i => i.id);
      let movies = [...state.movies];

      movies = movies.map(i => {
        let upcoming = action.date < new Date(i.release_date).getTime();
        if (list.includes(i.id) || !upcoming) {
          return Object.assign({}, i, { isHidden: true });
        }
        return Object.assign({}, i, { isHidden: false });
      });
      return Object.assign({}, state, { needsFiltering: false, movies });
    }
    default:
      return state;
  }
};
