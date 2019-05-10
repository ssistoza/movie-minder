import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import RemovableMovieItem from '../component/RemovableMovieItem';
import { deleteMovieFromList, setToggleMovie } from '../redux/actions';

/**
 * List of user movies.
 *
 * @class      UsersMovies (name)
 */
class UsersMovies extends React.Component {
  componentDidMount() {
    this.props.onLoad(this.props.movieList.isFetching);
  }

  componentDidUpdate() {
    this.props.onLoad(this.props.movieList.isFetching);
  }

  removeMovie = docId => this.props.dispatch(deleteMovieFromList(docId));
  toggleWatched = (docId, isWatched) => {
    const watched = isWatched ? true : false;
    this.props.dispatch(setToggleMovie(docId, !watched));
  };

  render() {
    const { list } = this.props.movieList;

    return (
      <List divided relaxed>
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
      </List>
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
