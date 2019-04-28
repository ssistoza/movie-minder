import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import MovieItem from '../component/MovieItem';
import {
  fetchList,
  deleteMovieFromList,
  fetchUpcomingMovies,
} from '../redux/actions';

/**
 * List of user movies.
 *
 * @class      UserMovieList (name)
 */
class UserMovieList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchList());
  }

  removeMovie = docId => {
    const { dispatch } = this.props;
    dispatch(deleteMovieFromList(docId));
  };

  render() {
    const { isFetching, list } = this.props.movieList;

    if (isFetching) {
      return <p>Fetching...</p>;
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
} // UserMovieList

function mapStateToProps(state) {
  const movieList = state.movieList || { isFetching: true, list: [] };
  return { movieList };
}

export default connect(mapStateToProps)(UserMovieList);
