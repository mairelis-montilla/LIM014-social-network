// Sign Up with email and password
const signUpAuth = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

// Sign in with Google
const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// Log In
const logInAuth = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

// Sign Out
const signOutAuth = () => firebase.auth().signOut();

// Current user info
const userData = () => {
  const user = firebase.auth().currentUser;
  if (user === null) {
    console.log('soy null linea 22 auth');
  }
  return {
    name: user.displayName,
    id: user.uid,
    photo: user.photoURL !== null ? user.photoURL : '../img/tay.jpg',
  };
};

// On auth state changed
/* const authStateChanged = () => firebase.auth().onAuthStateChanged((user) => (user !== null
  ? {
    name: user.displayName,
    id: user.uid,
    photo: user.photoURL !== null ? user.photoURL : '../img/tay.jpg',
  }
  : console.log('error'))); */

export {
  signUpAuth,
  logInAuth,
  signInGoogle,
  signOutAuth,
  userData,
  /* authStateChanged */
};
