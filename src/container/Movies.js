import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditableMovieItem from '../component/EditableMovieItem';
import PaginateMovieList from '../component/PaginateMovieList';
import * as AllPossibleActions from '../redux/actions';

class Movies extends React.Component {
  componentDidMount() {
    const {
      onLoad,
      actions: { fetchMovies },
    } = this.props;
    onLoad(true);
    fetchMovies();
  }

  componentDidUpdate(prevProps) {
    if (!this.props.allMovies.isFetching) this.props.onLoad(false);
  }

  getMoreMovies = () => {
    const {
      actions: { fetchMovies },
      allMovies: { apiPage, totalPage },
    } = this.props;

    if (apiPage < totalPage) {
      fetchMovies(apiPage + 1);
    }
  };

  addMovie = movie => this.props.actions.addMovieToList(movie);

  render() {
    const {
      actions: { setPaginationPage },
      allMovies: { movies, paginationPage },
    } = this.props;

    if (movies.length <= 0) {
      return <p>No Movies!</p>;
    }

    return (
      <>
        <PaginateMovieList
          onPageChange={setPaginationPage}
          fetchMovies={this.getMoreMovies}
          paginationPage={paginationPage}
        >
          {/* Replace with list for unpaginated version.*/}
          {movies.map(movie => (
            <EditableMovieItem
              key={movie.id}
              {...movie}
              onMovieAdd={() => this.addMovie(movie)}
            />
          ))}
        </PaginateMovieList>
      </>
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
  return { actions: bindActionCreators(AllPossibleActions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
