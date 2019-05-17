import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import AddibleMovieItem from '../component/AddibleMovieItem';
import * as AllActionCreators from '../redux/actions';

class SearchMovies extends React.Component {
  componentDidMount() {
    const { movieResults, onLoad, showPlaceholder } = this.props;
    onLoad(movieResults.isSearching);

    if (movieResults.movies.length <= 0) {
      showPlaceholder(true);
    } else {
      showPlaceholder(false);
    }
  } // cDM

  componentDidUpdate() {
    const { movieResults, onLoad, showPlaceholder } = this.props;
    onLoad(movieResults.isSearching);

    if (movieResults.movies.length <= 0) {
      showPlaceholder(true);
    } else {
      showPlaceholder(false);
    }
  } // cDU

  addMovie = movie => this.props.actions.addMovieToList(movie);
  getMoreMovies = () => {
    const {
      // actions: { fetchMovies },
      movieResults: { apiPage, totalPage },
    } = this.props;

    if (apiPage < totalPage) {
      // nextSearch(apiPage + 1);
    }
  };

  render() {
    const { movies } = this.props.movieResults;
    if (movies.length <= 0) return null;

    return (
      <List>
        {movies.map(movie => (
          <AddibleMovieItem
            key={movie.id}
            {...movie}
            onMovieAdd={() => this.addMovie(movie)}
          />
        ))}
      </List>
    );
  }
} // SearchMovies

function mapStateToProps(state) {
  let movieResults = state.movieResults;
  // Get only movies not in the list.
  // const results = movieResults.results.filter(i => !i.isHidden);
  // movieResults = Object.assign({}, movieResults, { results });
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
