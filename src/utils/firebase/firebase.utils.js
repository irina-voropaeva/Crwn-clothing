import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  writeBatch,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6kvxTbwtEyqneOwQmb6sQpS9h3wI5tzQ",
  authDomain: "crwn-clothing-db-2c4f5.firebaseapp.com",
  projectId: "crwn-clothing-db-2c4f5",
  storageBucket: "crwn-clothing-db-2c4f5.appspot.com",
  messagingSenderId: "971939744035",
  appId: "1:971939744035:web:3e018fa0f3c2124b00a496",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const newDocRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const categoriesRef = collection(db, "categories");
  const q = query(categoriesRef);
  const querySnapshot = await getDocs(q);

  const categories = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    accumulator[title.toLowerCase()] = items;

    return accumulator;
  }, {});

  return categories;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
