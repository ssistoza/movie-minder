import React from 'react';
import { Form, Button, Radio, Checkbox } from 'semantic-ui-react';

class SearchForm extends React.Component {
  state = {
    search: '',
    releaseDate: '',
    watched: false,
    notWatched: false,
  };

  handleSearch = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  toggle = (e, { name, checked }) => {
    this.setState({ [name]: checked });
  };

  handleSubmit = e => {
    console.log(e.target);
  };

  render() {
    const { releaseDate, search, watched, notWatched } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Search</label>
            <input
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
          <Button type="submit">Search</Button>
        </Form>
      </>
    );
  }
}

export default SearchForm;
