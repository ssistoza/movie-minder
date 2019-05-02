import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/home">
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
      </Link>
      <Link to="/list">
        <Menu.Item as="a">
          <Icon name="list" />
          My List
        </Menu.Item>
      </Link>
      <Link to="/home">
        <Menu.Item as="a">
          <Icon name="video" />
          Search Movies
        </Menu.Item>
      </Link>
      <Link to="/login">
        <Menu.Item as="a">
          <Icon name="sign-in" />
          Sign In
        </Menu.Item>
      </Link>
      <Link to="/signout">
        <Menu.Item as="a">
          <Icon name="sign-out" />
          Sign Out
        </Menu.Item>
      </Link>
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
