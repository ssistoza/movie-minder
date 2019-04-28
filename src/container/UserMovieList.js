import React from 'react';
import { connect } from 'react-redux';
import { fetchList } from '../redux/actions';

class UserMovieList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchList());
  }

  render() {
    const { isFetching, list } = this.props.movieList;

    if (isFetching) {
      return <p>Fetching...</p>;
    }

    console.log(list);
    const listOfMovies = list.map(i => <li>{i.title}</li>);
    return <ul>{listOfMovies}</ul>;
  }
} // UserMovieList

function mapStateToProps(state) {
  const movieList = state.movieList || { isFetching: true, list: [] };
  return { movieList };
}

export default connect(mapStateToProps)(UserMovieList);
