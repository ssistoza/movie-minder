import React from 'react';
import { List, Image } from 'semantic-ui-react';

const ListExampleDivided = () => (
  <List divided relaxed>
    <List.Item>
      <Image
        src="https://image.tmdb.org/t/p/w92/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
        size="mini"
      />
      <List.Content>
        <List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
        <List.Description as="a">Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">Semantic-Org/Semantic-UI-Docs</List.Header>
        <List.Description as="a">Updated 22 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">Semantic-Org/Semantic-UI-Meteor</List.Header>
        <List.Description as="a">Updated 34 mins ago</List.Description>
      </List.Content>
    </List.Item>
  </List>
);

export default ListExampleDivided;
