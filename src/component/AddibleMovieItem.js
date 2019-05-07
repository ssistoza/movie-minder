import React from 'react';
import PropTypes from 'prop-types';
import { Button, List } from 'semantic-ui-react';
import MovieItem from './MovieItem';

class AddibleMovieItem extends React.Component {
  state = {
    loading: false,
  };

  static propTypes = {
    onMovieAdd: PropTypes.func.isRequired,
  };

  handleClick = () => {
    this.setState({ loading: true }, () => this.props.onMovieAdd());
  };

  render() {
    const { poster_path, release_date, title, overview } = this.props;
    const passable = { poster_path, release_date, title, overview };
    return (
      <MovieItem
        {...passable}
        moveable={
          <List.Content floated="right">
            <Button
              circular
              icon="plus"
              {...this.state}
              onClick={this.handleClick}
            />
          </List.Content>
        }
      />
    );
  }
} // AddibleMovieItem

export default AddibleMovieItem;
