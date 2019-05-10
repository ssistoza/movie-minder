import { updateObject } from '../../helper';

// Returns a subset of state. NOT entire state
export function movieVisibility(list, action) {
  let movies = list;
  switch (action.movieVisibility) {
    case 'SHOW_UPCOMING':
      movies = list.map(movie => {
        if (
          action.isUpcoming.filter(i => movie.id === i.id).shift().isUpcoming
        ) {
          return updateObject(movie, { isHidden: false });
        } else {
          return updateObject(movie, { isHidden: true });
        }
      });
      break;
    case 'SHOW_PAST':
      movies = list.map(movie => {
        if (
          action.isUpcoming.filter(i => movie.id === i.id).shift().isUpcoming
        ) {
          return updateObject(movie, { isHidden: true });
        } else {
          return updateObject(movie, { isHidden: false });
        }
      });
      break;
    case 'SHOW_ALL':
      movies = list.map(movie => updateObject(movie, { isHidden: false }));
      break;
    default:
      break;
  }
  return movies;
}

/* UserMovies
 * [ WatchedVisibility ] & [ MovieVisibility ]
 * if (SHOW_ALL && SHOW_ALL)
 * if (SHOW_WATCHED && SHOW_UPCOMING)
 * if (SHOW_UNWATCHED && SHOW_PAST)
 *
 * Movies
 * [ MovieVisibility ]
 * if (SHOW_ALL)
 * if (SHOW_UPCOMING)
 * if (SHOW_PAST)
 */
