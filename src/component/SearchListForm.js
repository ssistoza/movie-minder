import React from 'react';
import { Form, Button, Radio, Checkbox, Input } from 'semantic-ui-react';

class SearchListForm extends React.Component {
  state = {
    search: '',
    releaseDate: '',
  };

  handleSearch = (e, { name, value }) => {
    this.setState({ [name]: value });
    // this.handleSubmit();
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
    // this.handleSubmit();
  };

  handleSubmit = evt => {
    this.props.onSubmit(evt, this.state);
  };

  render() {
    const { releaseDate, search } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
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
              value="past"
              checked={releaseDate === 'past'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              name="releaseDate"
              label="Upcoming"
              value="upcoming"
              checked={releaseDate === 'upcoming'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              name="releaseDate"
              label="All"
              value="all"
              checked={releaseDate === 'all'}
              onChange={this.handleChange}
            />
          </Form.Group>
          {this.props.children}
          <Button type="submit">Search</Button>
        </Form>
      </>
    );
  }
}

export default SearchListForm;
