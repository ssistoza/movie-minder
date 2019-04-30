import React from 'react';
import { Feed, Header } from 'semantic-ui-react';

const ActivityFeed = ({ children }) => (
  <Feed size="small">
    <Header className="white-text" as="h4">
      Activity
    </Header>
    <Feed.Event>
      <Feed.Content className="feed-format">
        <Feed.Summary className="white-text">A movie was added.</Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);

export default ActivityFeed;
