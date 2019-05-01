import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import MovieItem from '../component/MovieItem';
import { fetchList, deleteMovieFromList } from '../redux/actions';

/**
 * List of user movies.
 *
 * @class      UsersMovies (name)
 */
class UsersMovies extends React.Component {
  componentDidMount() {
    const { dispatch, onLoad } = this.props;
    onLoad(true);
    dispatch(fetchList());
  }

  componentDidUpdate() {
    if (!this.props.movieList.isFetching) {
      this.props.onLoad(false);
    }
  }

  removeMovie = docId => {
    const { dispatch } = this.props;
    dispatch(deleteMovieFromList(docId));
  };

  render() {
    const { isFetching, list } = this.props.movieList;

    if (isFetching) {
      return null;
    }

    return (
      <List divided relaxed>
        {list.map(movie => (
          <MovieItem
            key={movie.docId}
            {...movie}
            onMovieRemove={() => this.removeMovie(movie.docId)}
          />
        ))}
      </List>
    );
  }
} // UsersMovies

function mapStateToProps(state) {
  const movieList = state.movieList || { isFetching: true, list: [] };
  return { movieList };
}

export default connect(mapStateToProps)(UsersMovies);
