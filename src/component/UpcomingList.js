import React from 'react';
import { List } from 'semantic-ui-react';
import { FirebaseContext } from '../firebase';
import MovieItem from './MovieItem';
import upcomingMoviesJson from '../data/upcoming';

class UpcomingList extends React.Component {
  static contextType = FirebaseContext;

  addNewMovie = async movie => {
    console.log(this.context);
    try {
      const docRef = await this.context.addNewMovie(movie);
      console.log('Added new document to firesstore: ', docRef.id);
    } catch (error) {
      console.error(error);
    }
  };

  handleNewMovieAdd = movie => {
    this.addNewMovie(movie);
  };

  render() {
    return (
      <List divided relaxed>
        {upcomingMoviesJson.results.map(movie => (
          <MovieItem
            key={movie.id}
            {...movie}
            onMovieAdd={() => this.handleNewMovieAdd(movie)}
          />
        ))}
      </List>
    );
  }
}

export default UpcomingList;
