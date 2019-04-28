import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import UpcomingList from '../component/UpcomingList';
import PageTitle from '../component/PageTitle';
import UserMovieList from '../container/UserMovieList';

class Home extends React.Component {
  render() {
    return (
      <Grid padded>
        <PageTitle title="Welcome to the Homepage" />
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment>
              <UserMovieList />
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment>
              <UpcomingList />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
} // Home

export default Home;
