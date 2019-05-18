import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import config from './firebase.config';

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.db = app.firestore();
    this.auth = app.auth();
  }

  // *** Auth ***
  createUserWithEmailAndPassword = (email, password) => {
    this.auth.createUserWithEmailAndPassword(email, password);
  };

  signInWithEmailAndPassword = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  };

  loggedIn = () => this.auth.currentUser;
  signOut = () => this.auth.signOut();

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
