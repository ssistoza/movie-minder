import React from 'react';
import { connect } from 'react-redux';
import SidebarMenu from '../component/SidebarMenu';

/**
 * Class for sidebar menu container.
 *  - Should not be called as this container does no produce a sidebar.
 *  - Get Called by Sidebar component.
 * @class      SidebarMenuContainer (name)
 */
class SidebarMenuContainer extends React.Component {
  render() {
    return <SidebarMenu authenticated={this.props.authenticated} />;
  }
} // SidebarMenuContainer

function mapStateToProps(state) {
  const authenticated = state.authenticated;
  return { authenticated };
}

export default connect(mapStateToProps)(SidebarMenuContainer);
