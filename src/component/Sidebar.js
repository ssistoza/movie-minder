import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import SidebarMenuContainer from '../container/SidebarMenuContainer';

const SidebarComponent = ({ children }) => (
  <Sidebar.Pushable className="max-stop-overflow">
    <Sidebar
      as={Menu}
      animation="push"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
    >
      <SidebarMenuContainer />
    </Sidebar>

    <Sidebar.Pusher>
      <div className="scrollable-overflow">{children}</div>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default SidebarComponent;
