import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import EditableMovieItem from '../component/EditableMovieItem';
import { fetchList, deleteMovieFromList } from '../redux/actions';

/**
 * List of user movies.
 *
 * @class      UsersMovies (name)
 */
class UsersMovies extends React.Component {
  componentDidMount() {
    const {
      dispatch,
      onLoad,
      movieList: { isFetching },
    } = this.props;
    if (isFetching) {
      onLoad(true);
    }

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
    const { list } = this.props.movieList;

    return (
      <List divided relaxed>
        {list.map(movie => (
          <EditableMovieItem
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
  const movieList = state.movieList;
  return { movieList };
}

export default connect(mapStateToProps)(UsersMovies);
