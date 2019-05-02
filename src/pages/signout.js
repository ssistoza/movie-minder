import React from 'react';
import { Grid } from 'semantic-ui-react';
import SegmentLoader from '../component/SegmentLoader';
import SignoutContainer from '../container/Signout';

class Signout extends React.Component {
  render() {
    return (
      <Grid padded centered>
        <Grid.Row>
          <Grid.Column width={8}>
            <SegmentLoader>
              <SignoutContainer />
            </SegmentLoader>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
} // Signout

export default Signout;
