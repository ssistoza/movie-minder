import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

/**
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

  setLoader = i => {
    this.setState({ loading: i, placeholder: i });
  };

  render() {
    if (this.props.children) {
      return (
        <Segment {...this.state}>
          {React.cloneElement(this.props.children, { onLoad: this.setLoader })}
        </Segment>
      );
    } else {
      return <Segment placeholder />;
    }
  }
} // SegmentLoader

export default SegmentLoader;
