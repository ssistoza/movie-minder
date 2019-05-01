import React from 'react';
import { Grid } from 'semantic-ui-react';
import PageTitle from '../component/PageTitle';
import SegmentLoader from '../component/SegmentLoader';
import Movies from '../container/Movies';
import UsersMovies from '../container/UsersMovies';

class Home extends React.Component {
  render() {
    return (
      <Grid padded>
        <PageTitle title="Welcome to the Homepage" />
        <Grid.Row>
          <Grid.Column width={8}>
            <SegmentLoader>
              <UsersMovies />
            </SegmentLoader>
          </Grid.Column>
          <Grid.Column width={8}>
            <SegmentLoader>
              <Movies />
            </SegmentLoader>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
} // Home

export default Home;
