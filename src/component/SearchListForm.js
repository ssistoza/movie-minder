import React from 'react';
import { Form, Radio, Checkbox } from 'semantic-ui-react';
import SearchMovieForm from './SearchMovieForm';

class SearchListForm extends React.Component {
  state = {
    search: '',
    movieFilter: 'SHOW_ALL',
    watched: true,
    notWatched: true,
  };

  toggle = (evt, data) => {
    const { name, checked } = data;
    this.setState({ [name]: checked }, () => {
      this.props.onSearch({ ...this.state });
    });
  };

  handleChanges = (evt, data) => {
    this.setState({ ...data }, () => {
      this.props.onSearch(this.state);
    });
  };

  render() {
    const { movieFilter, watched, notWatched } = this.state;

    return (
      <SearchMovieForm onAnyChange={this.handleChanges}>
        <Form.Group inline>
          <label>Filter by Release Date</label>
          <Form.Field
            control={Radio}
            name="movieFilter"
            label="Past"
            value="SHOW_PAST"
            checked={movieFilter === 'SHOW_PAST'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            name="movieFilter"
            label="Upcoming"
            value="SHOW_UPCOMING"
            checked={movieFilter === 'SHOW_UPCOMING'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            name="movieFilter"
            label="All"
            value="SHOW_ALL"
            checked={movieFilter === 'SHOW_ALL'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group inline>
          <label>Filter by Watched</label>
          <Form.Field
            name="watched"
            control={Checkbox}
            label="Watched"
            checked={watched}
            onChange={this.toggle}
          />
          <Form.Field
            name="notWatched"
            control={Checkbox}
            label="Not Watched"
            checked={notWatched}
            onChange={this.toggle}
          />
        </Form.Group>
      </SearchMovieForm>
    );
  }
} // SearchListForm

export default SearchListForm;
