import React from 'react';
import { Grid } from 'semantic-ui-react';
import PageTitle from '../component/PageTitle';
import SegmentLoader from '../component/SegmentLoader';
import ListSearchFormContainer from '../container/ListSearchFormContainer';
import UsersMovies from '../container/UsersMovies';

class List extends React.Component {
  render() {
    return (
      <Grid padded>
        <PageTitle title="Filter Through List" />
        <Grid.Row>
          <Grid.Column width={8}>
            <SegmentLoader>
              <UsersMovies />
            </SegmentLoader>
          </Grid.Column>
          <Grid.Column width={8}>
            <SegmentLoader>
              <ListSearchFormContainer />
            </SegmentLoader>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
} // List

export default List;
