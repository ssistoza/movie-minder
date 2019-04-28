import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';
import List from './List';

const columns = (
  <Grid.Row>
    <Grid.Column width={8}>
      <Segment>
        <List />
      </Segment>
    </Grid.Column>
    <Grid.Column width={8}>
      <Segment>
        <List />
      </Segment>
    </Grid.Column>
  </Grid.Row>
);

const GridExampleGrid = () => <Grid padded>{columns}</Grid>;

export default GridExampleGrid;
