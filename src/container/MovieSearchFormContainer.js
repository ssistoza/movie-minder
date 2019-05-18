import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { fetchSearchMovie, clearSearch } from '../redux/actions';
import SearchMovieForm from '../component/SearchMovieForm';

class MovieSearchFormContainer extends React.Component {
  state = {
    search: '',
  };

  // Reset Search!
  componentWillUnmount() {
    this.props.dispatch(clearSearch());
  }

  search = (evt, { search }) => this.setState({ search });
  submit = () => this.props.dispatch(fetchSearchMovie(this.state.search));

  render() {
    return (
      <SearchMovieForm onAnyChange={this.search}>
        <Button primary onClick={this.submit}>
          Submit
        </Button>
      </SearchMovieForm>
    );
  }
} // MovieSearchFormContainer

function mapStateToProps(state) {
  const movieResults = state.movieResults;
  return { movieResults };
}

export default connect(mapStateToProps)(MovieSearchFormContainer);
