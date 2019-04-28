export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

const requestMovies = page => ({ type: REQUEST_MOVIES, data: page });
const recieveMovies = json => ({
  type: REQUEST_MOVIES,
  data: json,
  received: Date.now(),
});
