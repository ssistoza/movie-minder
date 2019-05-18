import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PaginateMovieList from '../component/PaginateMovieList';
import AddibleMovieItem from '../component/AddibleMovieItem';
import * as AllActionCreators from '../redux/actions';

class SearchMovies extends React.Component {
  componentDidMount() {
    const { movieResults, onLoad, showPlaceholder } = this.props;
    onLoad(movieResults.isSearching);

    if (!movieResults.isSearching) {
      movieResults.movies.length <= 0
        ? showPlaceholder(true)
        : showPlaceholder(false);
    }
  } // cDM

  componentDidUpdate() {
    const { movieResults, onLoad, showPlaceholder } = this.props;
    onLoad(movieResults.isSearching);

    if (!movieResults.isSearching) {
      movieResults.movies.length <= 0
        ? showPlaceholder(true)
        : showPlaceholder(false);
    }
  } // cDU

  addMovie = movie => this.props.actions.addMovieToList(movie);
  getMoreMovies = () => this.props.actions.fetchSearchMovie();

  render() {
    const { movies, totalResults } = this.props.movieResults;
    if (movies.length <= 0) return null;

    return (
      <PaginateMovieList
        totalResults={totalResults}
        onNext={this.getMoreMovies}
      >
        {movies.map(movie => (
          <AddibleMovieItem
            key={movie.id}
            {...movie}
            onMovieAdd={() => this.addMovie(movie)}
          />
        ))}
      </PaginateMovieList>
    );
  }
} // SearchMovies

function mapStateToProps(state) {
  let movieResults = state.movieResults;
  // Get only movies not in the list.
  const movies = movieResults.movies.filter(i => !i.isHidden);
  movieResults = Object.assign({}, movieResults, { movies });
  return { movieResults };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AllActionCreators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMovies);
