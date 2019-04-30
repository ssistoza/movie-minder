import React from 'react';
import { List, Button, Image } from 'semantic-ui-react';
import { formatDate } from '../helper';

class MovieItem extends React.Component {
  state = {
    loading: false,
  };

  handleClick = f => {
    this.setState({ loading: true });
    f();
  };

  render() {
    const {
      poster_path,
      release_date,
      title,
      onMovieAdd,
      onMovieRemove,
    } = this.props;

    return (
      <List.Item>
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
        <Image
          src={`${process.env.REACT_APP_MOVIE_IMAGE}/${poster_path}`}
          size="mini"
        />
        <List.Content>
          <List.Header as="a">{title}</List.Header>
          <List.Description as="a">
            Release Date: {formatDate(release_date)}
          </List.Description>
        </List.Content>
      </List.Item>
    );
  }
}
export default MovieItem;
