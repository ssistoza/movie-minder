import app from 'firebase/app';
import 'firebase/firestore';
import config from './firebase.config';

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.db = app.firestore();
  }

  // Moving methods to redux => See redux - actions.
  addNewMovie = newMovie =>
    this.db.collection('movie-list').add({ ...newMovie });
  getMovies = () => this.db.collection('movie-list').get();
  removeMovie = documentId =>
    this.db
      .collection('movie-list')
      .doc(documentId)
      .delete();
}

export default Firebase;
