import React from 'react';
import { connect } from 'react-redux';
import SearchListForm from '../component/SearchListForm';
import { filterList, resetListVisibility } from '../redux/actions';

/**
 * List of user movies.
 *
 * @class      ListSearchFormContainer (name)
 */
class ListSearchFormContainer extends React.Component {
  componentWillUnmount() {
    this.props.dispatch(resetListVisibility());
  }

  search = data => this.props.dispatch(filterList(data));
  render() {
    return <SearchListForm onSearch={this.search} />;
  }
} // ListSearchFormContainer

function mapStateToProps(state) {
  const movieList = state.movieList;
  return { movieList };
}

export default connect(mapStateToProps)(ListSearchFormContainer);
