import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

/**
 * HigherOrderComponent exposing loading interface to children.
 *
 * Class wrapper around SemanticUI's Segment.
 * - Will expose a onLoad prop down to child
 * - If children is empty it will place a temporary holder.
 *
 * @class      SegmentLoader (name)
 */
class SegmentLoader extends React.Component {
  state = {
    loading: false,
    placeholder: false,
  };

  static propTypes = {
    children: PropTypes.element,
  };

  setPlaceholder = result => {
    this.setState({ placeholder: result });
  };

  setLoader = result => {
    this.setState({ loading: result, placeholder: result });
  };

  render() {
    if (this.props.children) {
      return (
        <Segment {...this.state}>
          {React.cloneElement(this.props.children, {
            onLoad: this.setLoader,
            showPlaceholder: this.setPlaceholder,
          })}
        </Segment>
      );
    } else {
      return <Segment placeholder />;
    }
  }
} // SegmentLoader

export default SegmentLoader;
