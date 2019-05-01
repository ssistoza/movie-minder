import React from 'react';
import { List, Button, Image, Popup } from 'semantic-ui-react';
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
      overview,
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
          src={
            poster_path
              ? `${process.env.REACT_APP_MOVIE_IMAGE}/${poster_path}`
              : `http://via.placeholder.com/32x52`
          }
          size="mini"
        />
        <List.Content>
          <Popup
            trigger={<List.Header as="a">{title}</List.Header>}
            content={overview}
          />

          <List.Description as="a">
            Release Date: {formatDate(release_date)}
          </List.Description>
        </List.Content>
      </List.Item>
    );
  }
}
export default MovieItem;
