import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

class PaginationButtons extends React.Component {
  state = {
    disableNext: false,
    loadingNext: false,
    disablePrev: false,
    loadingPrev: false,
  };

  handleNextClick = e => {
    this.setState(prevState => ({
      disableNext: !prevState.disableNext,
      loadingNext: !prevState.loadingNext,
    }));

    this.props.onNextClick();

    this.setState(prevState => ({
      disableNext: !prevState.disableNext,
      loadingNext: !prevState.loadingNext,
    }));
  };

  render() {
    const { onPrevClick, paginationPage, totalPages } = this.props;

    const nextButtonProps = {
      disabled: this.state.disableNext,
      loading: this.state.loadingNext,
      onClick: this.handleNextClick,
    };

    return (
      <div>
        <Button size="mini" animated onClick={onPrevClick}>
          <Button.Content visible>Prev</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
        <Button size="mini" animated {...nextButtonProps}>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
        <span>
          Page {paginationPage} of {totalPages}
        </span>
      </div>
    );
  }
} // PaginationButtons

export default PaginationButtons;
