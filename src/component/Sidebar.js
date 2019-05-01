import React from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import ActivityFeed from './ActivityFeed';

const SidebarExampleVisible = ({ children }) => (
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
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="list" />
        My List
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="video" />
        Search Movies
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="sign-in" />
        Sign In
      </Menu.Item>
      <div className="activity-feed">
        <ActivityFeed />
      </div>
    </Sidebar>

    <Sidebar.Pusher>
      <div className="scrollable-overflow">{children}</div>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default SidebarExampleVisible;
