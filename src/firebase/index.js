import FirebaseContext from './context';
import FirebaseClass from './firebase';

// Firebase instance => Singleton.
const Firebase = new FirebaseClass();

export default Firebase;
export { FirebaseContext, FirebaseClass };
