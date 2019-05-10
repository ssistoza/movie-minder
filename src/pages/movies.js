import React from 'react';
import { Grid } from 'semantic-ui-react';
import PageTitle from '../component/PageTitle';
import SegmentLoader from '../component/SegmentLoader';
import SearchMovies from '../container/SearchMovies';
import MovieSearchFormContainer from '../container/MovieSearchFormContainer';

class Movies extends React.Component {
  render() {
    return (
      <Grid padded>
        <PageTitle title="Welcome to the Homepage" />
        <Grid.Row>
          <Grid.Column width={8}>
            <SegmentLoader>
              <MovieSearchFormContainer />
            </SegmentLoader>
          </Grid.Column>
          <Grid.Column width={8}>
            <SegmentLoader>
              <SearchMovies />
            </SegmentLoader>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
} // Movies

export default Movies;
