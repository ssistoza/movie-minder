import React from 'react';
import { Button, List } from 'semantic-ui-react';

class MovieItemButton extends React.Component {
  state = {
    loading: false,
  };

  render() {
    const { onMovieAdd, onMovieRemove } = this.props;

    return (
      <List.Content floated="right">
        <Button circular icon="plus" {...this.state} onClick={onMovieAdd} />
      </List.Content>
    );
  }
} // MovieItemButton

export default MovieItemButton;
