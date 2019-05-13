import React from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import PaginateMovieItems from './PaginateMovieItems';
import PaginationButtons from './PaginationButtons';

/**
 * List of paginated movies.
 * - DEFAULT PAGINATES at 10 perPage.
 * @class      PaginateMovieList (name)
 */
class PaginateMovieList extends React.Component {
  state = {
    perPage: 10, // Change this to determine how much movie items are render on a page.
  };

  componentDidMount() {
    // If there are only 2 pages. Fetch more.
    const { paginationPage, next } = this.props;
    let currentPage = paginationPage;
    let totalPages = this.totalPages();

    if (currentPage === totalPages - 1) {
      next();
    }
  }

  handleNextPage = () => {
    const { onPageChange, paginationPage, next } = this.props;
    let currentPage = paginationPage;
    let totalPages = this.totalPages();

    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      if (currentPage + 1 === totalPages - 1) {
        // Start a new fetch if it is the beginning of the last page.
        next();
      }
    }
  };

  handlePreviousPage = () => {
    const { onPageChange, paginationPage } = this.props;
    if (paginationPage > 1) {
      onPageChange(paginationPage - 1);
    }
  };

  totalPages = () => Math.ceil(this.props.children.length / this.state.perPage);
  render() {
    const { children, paginationPage } = this.props;

    return (
      <>
        <List divided relaxed>
          <PaginateMovieItems paginationPage={paginationPage}>
            {children}
          </PaginateMovieItems>
        </List>
        <PaginationButtons
          paginationPage={paginationPage}
          totalPages={this.totalPages(children.length)}
          onPrevClick={this.handlePreviousPage}
          onNextClick={this.handleNextPage}
        />
      </>
    );
  }
} // PaginateMovieList

PaginateMovieList.propTypes = {
  next: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  paginationPage: PropTypes.number.isRequired,
};

export default PaginateMovieList;
