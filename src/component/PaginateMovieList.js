import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import { setPaginationPage } from '../redux/actions';
import PaginateMovieItems from './PaginateMovieItems';
import PaginationButtons from './PaginationButtons';

/**
 * List of paginated movies.
 *  - Will determine how items should show on the page and pass it down.
 * @class      PaginateMovieList (name)
 */
class PaginateMovieList extends React.Component {
  state = {
    perPage: 10, // Change this to determine how much movie items are render on a page.
  };

  handleNextPage = () => {
    const { dispatch, paginationPage } = this.props;

    if (paginationPage < this.totalPages()) {
      dispatch(setPaginationPage(paginationPage + 1));
    }

    this.shouldFetchMore();
  };

  handlePreviousPage = () => {
    const { dispatch, paginationPage } = this.props;
    if (paginationPage > 1) {
      dispatch(setPaginationPage(paginationPage - 1));
    }
  };

  shouldFetchMore = () => {
    const { paginationPage } = this.props;
    if (paginationPage === this.totalPages() - 1) {
      this.props.fetchMovies();
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
          totalPages={this.totalPages()}
          onPrevClick={this.handlePreviousPage}
          onNextClick={this.handleNextPage}
        />
      </>
    );
  }
} // PaginateMovieList

function mapStateToProps(state) {
  let paginationPage = state.allMovies.paginationPage;
  return { paginationPage };
}

export default connect(mapStateToProps)(PaginateMovieList);
