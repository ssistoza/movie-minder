import React from 'react';
import PropTypes from 'prop-types';
import { List, Popup, Label } from 'semantic-ui-react';
import MovieIcon from './MovieIcon';
import { formatDate, isUpcoming } from '../helper';

/**
 * Basic MovieItem Component that deplays an item.
 *
 * @class      MovieItem (name)
 */
class MovieItem extends React.Component {
  static propTypes = {
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  };

  render() {
    const { poster_path, release_date, title, overview, moveable } = this.props;

    return (
      <List.Item>
        {moveable ? moveable : null}
        <MovieIcon poster_path={poster_path} />
        <List.Content>
          <Popup
            trigger={<List.Header as="a">{title}</List.Header>}
            content={overview}
          />
          <List.Description>
            Release Date: {formatDate(release_date)}
          </List.Description>
          <Label
            basic
            size="mini"
            color={isUpcoming(release_date) ? 'blue' : 'red'}
          >
            {isUpcoming(release_date) ? 'Upcoming' : 'In Theaters'}
          </Label>
          {this.props.children}
        </List.Content>
      </List.Item>
    );
  }
} // MovieItem

export default MovieItem;
