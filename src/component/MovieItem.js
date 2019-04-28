import React from 'react';
import { List, Button, Image } from 'semantic-ui-react';
import { formatDate } from '../helper';

const MovieItem = ({
  poster_path,
  release_date,
  title,
  onMovieAdd,
  onMovieRemove,
}) => (
  <List.Item>
    <List.Content floated="right">
      {onMovieAdd && <Button circular icon="plus" onClick={onMovieAdd} />}
      {onMovieRemove && (
        <Button circular icon="minus" onClick={onMovieRemove} />
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

export default MovieItem;
