import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCnJD3TaDlZlOgMqGcWWZAKgOohsyBqNrI",
  authDomain: "crwn-db-fccbc.firebaseapp.com",
  projectId: "crwn-db-fccbc",
  storageBucket: "crwn-db-fccbc.appspot.com",
  messagingSenderId: "778266561717",
  appId: "1: 778266561717: web: e7674ae4b64f56ace082fc",
  measurementId: "G-13ZW2CQQ0J",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
