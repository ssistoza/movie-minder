import React from 'react';
import { FirebaseContext } from '../firebase';
import { List, Image } from 'semantic-ui-react';
import MovieItem from './MovieItem';

class SavedList extends React.Component {
  static contextType = FirebaseContext;
  state = {
    movies: [],
  };

  componentDidMount() {
    this.getMovieList();
  }

  getMovieList = async () => {
    const getMoviesSnapshot = await this.context.getMovies();
    if (getMoviesSnapshot) {
      getMoviesSnapshot.forEach(doc => {
        this.setState(prevState => ({
          movies: [...prevState.movies, { docId: doc.id, ...doc.data() }],
        }));
      });
    }
  };

  removeAMovie = async docId => {
    const removeAMovie = await this.context.removeMovie(docId);

    // Eager Optimization
    this.setState(prevState => ({
      movies: prevState.movies.filter(movie => movie.docId !== docId),
    }));
  };

  handleRemoveAMovie = docId => {
    this.removeAMovie(docId);
  };

  render() {
    return (
      <List divided relaxed>
        {this.state.movies.map(movie => (
          <MovieItem
            key={movie.docId}
            {...movie}
            onMovieRemove={() => this.handleRemoveAMovie(movie.docId)}
          />
        ))}
      </List>
    );
  }
} // SavedList

export default SavedList;
