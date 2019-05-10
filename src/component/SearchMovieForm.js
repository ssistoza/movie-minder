import React from 'react';
import { Form, Checkbox } from 'semantic-ui-react';
import SearchListForm from './SearchListForm';

class SearchMovieForm extends React.Component {
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
    const { watched, notWatched } = this.state;

    return (
      <SearchListForm onAnyChange={this.handleChanges}>
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
      </SearchListForm>
    );
  }
} // SearchMovieForm

export default SearchMovieForm;
