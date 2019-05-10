import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

class SearchMovieForm extends React.Component {
  state = {
    search: '',
  };

  handleChange = (e, { name, value }) =>
    this.setState({ [name]: value }, () => this.handleSubmit());

  handleSubmit = evt => this.props.onAnyChange(evt, this.state);

  render() {
    const { search } = this.state;
    return (
      <>
        <Form>
          <Form.Field>
            <label>Search</label>
            <Input
              placeholder="Search..."
              type="text"
              name="search"
              onChange={this.handleChange}
              value={search}
            />
          </Form.Field>
          {this.props.children}
        </Form>
      </>
    );
  }
} // SearchMovieForm

SearchMovieForm.propTypes = {
  onAnyChange: PropTypes.func.isRequired,
};

export default SearchMovieForm;
