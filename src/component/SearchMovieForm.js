import React from 'react';
import { Form, Checkbox } from 'semantic-ui-react';
import SearchListForm from './SearchListForm';

class SearchMovieForm extends React.Component {
  state = {
    watched: false,
    notWatched: false,
  };

  toggle = (evt, data) => {
    const { name, checked } = data;
    this.setState({ [name]: checked });
    // this.props.onSubmit({...this.state});
  };

  handleChanges = (evt, data) => {
    const conditions = { ...data, ...this.state };
    this.props.onSearch(conditions);
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