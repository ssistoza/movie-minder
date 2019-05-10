import React from 'react';
import { Form, Radio, Input } from 'semantic-ui-react';

class SearchListForm extends React.Component {
  state = {
    search: '',
    movieFilter: 'SHOW_ALL',
  };

  handleChange = (e, { name, value }) =>
    this.setState({ [name]: value }, () => this.handleSubmit());

  handleSubmit = evt => this.props.onAnyChange(evt, this.state);

  render() {
    const { movieFilter, search } = this.state;
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
          {this.props.children}
        </Form>
      </>
    );
  }
}

export default SearchListForm;
