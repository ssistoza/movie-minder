import React from 'react';
import { connect } from 'react-redux';
import SearchMovieForm from '../component/SearchMovieForm';
import { filterList } from '../redux/actions';

/**
 * Searches from MovieDB API
 *
 * @class      MovieSearchFormContainer (name)
 */
class MovieSearchFormContainer extends React.Component {
  componentWillUnmount() {
    this.props.dispatch(
      filterList({
        search: '',
        releaseDate: 'SHOW_ALL',
        watched: true,
        notWatched: true,
      })
    );
  }

  search = data => {
    this.props.dispatch(filterList(data));
  };

  render() {
    return <SearchMovieForm onSearch={this.search} />;
  }
} // MovieSearchFormContainer

function mapStateToProps(state) {
  const movieList = state.movieList;
  return { movieList };
}

export default connect(mapStateToProps)(MovieSearchFormContainer);
