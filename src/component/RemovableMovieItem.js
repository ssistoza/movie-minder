import React from 'react';
import PropTypes from 'prop-types';
import { List, Button, Label } from 'semantic-ui-react';
import MovieItem from './MovieItem';

class EditableMovieItem extends React.Component {
  state = {
    loading: false,
  };

  static propTypes = {
    onMovieRemove: PropTypes.func.isRequired,
    onToggleWatched: PropTypes.func,
  };

  handleClick = () => {
    this.setState({ loading: true }, () => this.props.onMovieRemove());
  };

  render() {
    const {
      poster_path,
      release_date,
      title,
      overview,
      watched,
      onToggleWatched,
    } = this.props;

    const passable = { poster_path, release_date, title, overview };
    return (
      <MovieItem
        {...passable}
        moveable={
          <List.Content floated="right">
            <Button
              circular
              icon="minus"
              {...this.state}
              onClick={this.handleClick}
            />
          </List.Content>
        }
      >
        <Label
          basic
          as="a"
          size="mini"
          color={watched ? 'green' : 'black'}
          onClick={onToggleWatched}
        >
          {watched ? 'Watched' : 'Unwatched'}
        </Label>
      </MovieItem>
    );
  }
} // EditableMovieItem

export default EditableMovieItem;
