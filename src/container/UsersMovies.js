import React from 'react';
import { connect } from 'react-redux';
import PaginateMovieList from '../component/PaginateMovieList';
import RemovableMovieItem from '../component/RemovableMovieItem';
import { deleteMovieFromList, setToggleMovie } from '../redux/actions';

/**
 * List of user movies.
 *
 * @class      UsersMovies (name)
 */
class UsersMovies extends React.Component {
  componentDidMount() {
    const { onLoad, movieList, showPlaceholder } = this.props;
    onLoad(movieList.isFetching);

    // No results.
    if (movieList.length <= 0) {
      showPlaceholder(true);
    } else {
      showPlaceholder(false);
    }
  }

  componentDidUpdate() {
    const { onLoad, movieList, showPlaceholder } = this.props;
    onLoad(movieList.isFetching);

    // No results.
    if (movieList.length <= 0) {
      showPlaceholder(true);
    } else {
      showPlaceholder(false);
    }
  }

  removeMovie = docId => this.props.dispatch(deleteMovieFromList(docId));
  toggleWatched = (docId, isWatched) => {
    const watched = isWatched ? true : false;
    this.props.dispatch(setToggleMovie(docId, !watched));
  };

  render() {
    const { list } = this.props.movieList;
    if (list.length <= 0) return null;

    return (
      <PaginateMovieList totalResults={list.length}>
        {list.map(movie => (
          <RemovableMovieItem
            key={movie.docId}
            {...movie}
            onToggleWatched={() =>
              this.toggleWatched(movie.docId, movie.watched)
            }
            onMovieRemove={() => this.removeMovie(movie.docId)}
          />
        ))}
      </PaginateMovieList>
    );
  }
} // UsersMovies

function mapStateToProps(state) {
  let movieList = state.movieList;

  // find where isHidden is false!
  const list = movieList.list.filter(i => !i.isHidden);
  movieList = Object.assign({}, movieList, { list });
  return { movieList };
}

export default connect(mapStateToProps)(UsersMovies);
