import React from 'react';
import { Form, Radio, Input } from 'semantic-ui-react';

class SearchListForm extends React.Component {
  state = {
    search: '',
    releaseDate: '',
  };

  handleSearch = (e, { name, value }) => {
    this.setState({ [name]: value }, () => this.handleSubmit());
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value }, () => this.handleSubmit());
  };

  handleSubmit = evt => {
    this.props.onAnyChange(evt, this.state);
  };

  render() {
    const { releaseDate, search } = this.state;
    return (
      <>
        <Form>
          <Form.Field>
            <label>Search</label>
            <Input
              placeholder="Search..."
              type="text"
              name="search"
              onChange={this.handleSearch}
              value={search}
            />
          </Form.Field>
          <Form.Group inline>
            <label>Filter by Release Date</label>
            <Form.Field
              control={Radio}
              name="releaseDate"
              label="Past"
              value="SHOW_PAST"
              checked={releaseDate === 'SHOW_PAST'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              name="releaseDate"
              label="Upcoming"
              value="SHOW_UPCOMING"
              checked={releaseDate === 'SHOW_UPCOMING'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              name="releaseDate"
              label="All"
              value="SHOW_ALL"
              checked={releaseDate === 'SHOW_ALL'}
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
