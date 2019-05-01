import React from 'react';
import { connect } from 'react-redux';
import MovieItem from '../component/MovieItem';
import PaginateMovieList from '../component/PaginateMovieList';
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
    dispatch(fetchMovies());
  }

  getMoreMovies = () => {
    const {
      dispatch,
      allMovies: { apiPage, totalPage },
    } = this.props;

    if (apiPage < totalPage) {
      dispatch(fetchMovies(apiPage + 1));
    }
  };

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
      <>
        <PaginateMovieList fetchMovies={this.getMoreMovies}>
          {/* Replace with list for unpaginated version.*/}
          {movies.map(movie => (
            <MovieItem
              key={movie.id}
              {...movie}
              onMovieAdd={() => this.addMovie(movie)}
            />
          ))}
        </PaginateMovieList>
      </>
    );
  }
} // UpcomingMovieList

function mapStateToProps(state) {
  let allMovies = state.allMovies;

  // Get only movies not in the list.
  const movies = allMovies.movies.filter(i => !i.isHidden);
  allMovies = Object.assign({}, allMovies, { movies });
  return { allMovies };
}

export default connect(mapStateToProps)(UpcomingMovieList);
