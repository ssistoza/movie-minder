import React from 'react';
import PropTypes from 'prop-types';

/**
 * Returns number of MovieItem Components based on activePage.
 *
 * @class      PaginateMovieItems (name)
 */
class PaginateMovieItems extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    perPage: PropTypes.number.isRequired,
    paginationPage: PropTypes.number.isRequired,
  };

  paginateMovies = () => {
    const { children, paginationPage, perPage } = this.props;

    return children.filter((component, index) => {
      const start = paginationPage * perPage - perPage;
      const end = paginationPage * perPage - 1;
      if (index >= start && index <= end) return true;
      return false;
    });
  };

  render() {
    const tenMovies = this.paginateMovies();
    return tenMovies;
  }
} // PaginateMovieItems

export default PaginateMovieItems;
