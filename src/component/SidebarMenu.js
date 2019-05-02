import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import ActivityFeed from './ActivityFeed';

const SidebarMenu = props => {
  if (props.authenticated) {
    return <AuthenticatedSidebarMenu />;
  }
  return <BasicSidebarMenu />;
};

const BasicSidebarMenu = () => (
  <>
    <Link to="/home">
      <Menu.Item as="a">
        <Icon name="home" />
        Home
      </Menu.Item>
    </Link>
    <Link to="/login">
      <Menu.Item as="a">
        <Icon name="sign-in" />
        Sign In
      </Menu.Item>
    </Link>
  </>
);

const AuthenticatedSidebarMenu = () => (
  <>
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
    <Link to="/signout">
      <Menu.Item as="a">
        <Icon name="sign-out" />
        Sign Out
      </Menu.Item>
    </Link>
    <div className="activity-feed">
      <ActivityFeed />
    </div>
  </>
);

export default SidebarMenu;
