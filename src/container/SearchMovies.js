import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import AddibleMovieItem from '../component/AddibleMovieItem';
import * as AllActionCreators from '../redux/actions';

class SearchMovies extends React.Component {
  componentDidMount() {
    this.props.onLoad(this.props.movieResults.isSearching);
  }

  componentDidUpdate(prevProps) {
    this.props.onLoad(this.props.movieResults.isSearching);
  }

  addMovie = movie => this.props.actions.addMovieToList(movie);
  getMoreMovies = () => {
    const {
      actions: { fetchMovies },
      movieResults: { apiPage, totalPage },
    } = this.props;

    if (apiPage < totalPage) {
      // nextSearch(apiPage + 1);
    }
  };

  render() {
    const { searchText, movies } = this.props.movieResults;
    if (movies.length <= 0) return <p>testing...</p>;

    return (
      <List>
        {/* Replace with list for unpaginated version.*/}
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
