import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import MovieItem from '../component/MovieItem';
import { fetchUpcomingMovies, addMovieToList } from '../redux/actions';

/**
 * List of user movies.
 *
 * @class      MovieList (name)
 */
class MovieList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUpcomingMovies());
  }

  addMovie = movie => {
    const { dispatch } = this.props;
    dispatch(addMovieToList(movie));
  };

  render() {
    const { isFetching, movies } = this.props.upcomingMovies;

    if (isFetching) {
      return <p>Fetching...</p>;
    }

    if (!movies) {
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
} // MovieList

function mapStateToProps(state) {
  let upcomingMovies = state.upcomingMovies || {
    isFetching: true,
    page: 1,
    movies: [],
  };

  const movies = upcomingMovies.movies.filter(movie => {
    const today = Date.now();
    return today < new Date(movie.release_date).getTime() && !movie.isHidden;
  });

  return { upcomingMovies: { ...upcomingMovies, movies } };
}

export default connect(mapStateToProps)(MovieList);
