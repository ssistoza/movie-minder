import React from 'react';
import PropTypes from 'prop-types';
import { List, Button } from 'semantic-ui-react';
import MovieItem from './MovieItem';

class EditableMovieItem extends React.Component {
  state = {
    loading: false,
  };

  static propTypes = {
    onMovieAdd: PropTypes.func,
    onMovieRemove: PropTypes.func,
  };

  renderButtons() {
    const { onMovieAdd, onMovieRemove } = this.props;

    return (
      <List.Content floated="right">
        {onMovieAdd && (
          <Button
            circular
            icon="plus"
            {...this.state}
            onClick={() => this.handleClick(onMovieAdd)}
          />
        )}
        {onMovieRemove && (
          <Button
            circular
            icon="minus"
            {...this.state}
            onClick={() => this.handleClick(onMovieRemove)}
          />
        )}
      </List.Content>
    );
  }

  render() {
    const { poster_path, release_date, title, overview } = this.props;
    const passable = { poster_path, release_date, title, overview };
    return <MovieItem {...passable} moveable={this.renderButtons()} />;
  }
} // EditableMovieItem

export default EditableMovieItem;
