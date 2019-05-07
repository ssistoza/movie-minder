import React from 'react';
import { connect } from 'react-redux';
import SearchMovieForm from '../component/SearchMovieForm';
import { filterList } from '../redux/actions';

/**
 * List of user movies.
 *
 * @class      ListSearchFormContainer (name)
 */
class ListSearchFormContainer extends React.Component {
  componentWillUnmount() {
    console.log('unmounting...');
  }

  search = data => {
    this.props.dispatch(filterList(data));
  };

  render() {
    return <SearchMovieForm onSearch={this.search} />;
  }
} // ListSearchFormContainer

function mapStateToProps(state) {
  const movieList = state.movieList;
  return { movieList };
}

export default connect(mapStateToProps)(ListSearchFormContainer);
