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
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  };

  handleClick = f => {
    this.setState({ loading: true });
    f();
  };

  renderUpcoming = () => {
    if (isUpcoming(this.props.release_date)) {
      return (
        <Label basic size="mini" color="green">
          Upcoming
        </Label>
      );
    }

    return (
      <Label basic size="mini" color="red">
        In Theaters
      </Label>
    );
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

          <List.Description as="a">
            Release Date: {formatDate(release_date)}
          </List.Description>
          {this.renderUpcoming()}
        </List.Content>
      </List.Item>
    );
  }
} // MovieItem

export default MovieItem;
