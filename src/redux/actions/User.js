import Firebase from '../../firebase';
export const SIGN_IN = 'SIGN_IN';
export const SIGNED_IN = 'SIGNED_IN';

const signIn = (email, password) => ({
  type: SIGN_IN,
  data: {
    email,
    password,
  },
});

const signedIn = user => ({
  type: SIGNED_IN,
  data: user,
});

export const signinWithFirebase = (email, password) => async (
  dispatch,
  getState
) => {
  dispatch(signIn());
  await Firebase.auth.signInWithEmailAndPassword(email, password);
  const loggedIn = await Firebase.auth.currentUser;
  dispatch(signedIn(loggedIn));
};

export const SIGN_OUT = 'SIGN_OUT';
export const SIGNED_OUT = 'SIGNED_OUT';

const signOut = () => ({
  type: SIGN_OUT,
  data: null,
});

const signedOut = () => ({
  type: SIGNED_OUT,
  data: null,
});

export const signoutWithFirebase = () => async (dispatch, getState) => {
  if (getState().authenticated) {
    dispatch(signOut());
    await Firebase.auth.signOut();
    dispatch(signedOut());
  } else {
    throw new Error('No User Signed In');
  }
};
