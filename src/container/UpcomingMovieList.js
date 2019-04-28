import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import MovieItem from '../component/MovieItem';
import { fetchMovies, addMovieToList } from '../redux/actions';

/**
 * List of user movies.
 *
 * @class      UpcomingMovieList (name)
 */
class UpcomingMovieList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMovies());
  }

  addMovie = movie => {
    const { dispatch } = this.props;
    dispatch(addMovieToList(movie));
  };

  render() {
    const { isFetching, movies } = this.props.allMovies;

    if (isFetching) {
      return <p>Fetching...</p>;
    }

    if (movies.length <= 0) {
      return <p>No Movies!</p>;
    }

    return (
      <List divided relaxed>
        {movies.map(movie => (
          <MovieItem
            key={movie.id}
            {...movie}
            onMovieAdd={() => this.addMovie(movie)}
          />
        ))}
      </List>
    );
  }
} // UpcomingMovieList

function mapStateToProps(state) {
  let allMovies = state.allMovies || {
    isFetching: true,
    page: 1,
    movies: [],
  };
  const movies = allMovies.movies.filter(i => !i.isHidden);
  allMovies = Object.assign({}, allMovies, { movies });
  return { allMovies };
}

export default connect(mapStateToProps)(UpcomingMovieList);
