import React from 'react';
import { Grid } from 'semantic-ui-react';
import PageTitle from '../component/PageTitle';
import SegmentLoader from '../component/SegmentLoader';
import MoviesContainer from '../container/Movies';
import SearchMovieForm from '../component/SearchMovieForm';

class Movies extends React.Component {
  render() {
    return (
      <Grid padded>
        <PageTitle title="Welcome to the Homepage" />
        <Grid.Row>
          <Grid.Column width={8}>
            <SearchMovieForm />
          </Grid.Column>
          <Grid.Column width={8}>
            <SegmentLoader>
              <MoviesContainer />
            </SegmentLoader>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
} // Movies

export default Movies;
