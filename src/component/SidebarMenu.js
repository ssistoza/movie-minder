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
    <Link className="item" to="/login">
      <Menu.Item as="span">
        <Icon name="sign-in" />
        Sign In
      </Menu.Item>
    </Link>
  </>
);

const AuthenticatedSidebarMenu = () => (
  <>
    <Link className="item" to="/home">
      <Menu.Item as="span">
        <Icon name="home" />
        Home
      </Menu.Item>
    </Link>
    <Link className="item" to="/list">
      <Menu.Item as="span">
        <Icon name="list" />
        My List
      </Menu.Item>
    </Link>
    <Link className="item" to="/movies">
      <Menu.Item as="span">
        <Icon name="video" />
        Search Movies
      </Menu.Item>
    </Link>
    <Link className="item" to="/signout">
      <Menu.Item as="span">
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
