import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddibleMovieItem from '../component/AddibleMovieItem';
import PaginateMovieList from '../component/PaginateMovieList';
import * as AllActionCreators from '../redux/actions';

class Movies extends React.Component {
  componentDidMount() {
    this.props.onLoad(this.props.allMovies.isFetching);
  }

  componentDidUpdate() {
    this.props.onLoad(this.props.allMovies.isFetching);
  }

  getMoreMovies = async () => {
    const {
      actions: { fetchMovies, hideMovies },
      allMovies: { apiPage, totalPage },
    } = this.props;

    if (apiPage < totalPage) {
      await fetchMovies(apiPage + 1);
      hideMovies();
    }
  };

  addMovie = movie => this.props.actions.addMovieToList(movie);
  render() {
    const {
      allMovies: { movies, totalResults },
    } = this.props;

    if (movies.length <= 0) {
      return <p>No Movies!</p>;
    }

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
} // Movies

function mapStateToProps(state) {
  let allMovies = state.allMovies;

  // Get only movies not in the list.
  const movies = allMovies.movies.filter(i => !i.isHidden);
  allMovies = Object.assign({}, allMovies, { movies });
  return { allMovies };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AllActionCreators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
