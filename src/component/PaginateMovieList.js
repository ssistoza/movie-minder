import React from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import PaginateMovieItems from './PaginateMovieItems';
import PaginationButtons from './PaginationButtons';

/**
 * List of paginated movies.
 * - DEFAULT: 10 per page.
 * @class      PaginateMovieList (name)
 */
class PaginateMovieList extends React.Component {
  state = {
    perPage: 10,
    paginationPage: 1,
  };

  componentDidMount() {
    const { onNext } = this.props;
    const { paginationPage } = this.state;

    let totalPages = this.totalPages();

    if (paginationPage === totalPages - 1) {
      if (onNext) onNext();
    }
  }

  handleNextPage = () => {
    const { onNext } = this.props;
    const { paginationPage } = this.state;

    let totalPages = this.totalPages();

    if (paginationPage < totalPages) {
      this.setState(
        prev => ({ paginationPage: prev.paginationPage + 1 }),
        () => {
          if (paginationPage + 1 === totalPages - 1) {
            if (onNext) onNext();
          }
        }
      );
    }
  };

  handlePreviousPage = () => {
    const { paginationPage } = this.state;

    if (paginationPage > 1) {
      this.setState({ paginationPage: paginationPage - 1 });
    }
  };

  totalPages = () => Math.ceil(this.props.children.length / this.state.perPage);
  render() {
    const { children, totalResults } = this.props;
    const { paginationPage, perPage } = this.state;

    return (
      <>
        <List divided relaxed>
          <PaginateMovieItems perPage={perPage} paginationPage={paginationPage}>
            {children}
          </PaginateMovieItems>
        </List>
        <PaginationButtons
          paginationPage={paginationPage}
          totalPages={Math.ceil(totalResults / perPage)}
          onPrevClick={this.handlePreviousPage}
          onNextClick={this.handleNextPage}
        />
      </>
    );
  }
} // PaginateMovieList

PaginateMovieList.propTypes = {
  onNext: PropTypes.func,
  children: PropTypes.node.isRequired,
  totalResults: PropTypes.number.isRequired,
};

export default PaginateMovieList;
