import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider 
} from 'firebase/auth';
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';
import { async } from 'q';

const firebaseConfig = {
  apiKey: "AIzaSyA6kvxTbwtEyqneOwQmb6sQpS9h3wI5tzQ",
  authDomain: "crwn-clothing-db-2c4f5.firebaseapp.com",
  projectId: "crwn-clothing-db-2c4f5",
  storageBucket: "crwn-clothing-db-2c4f5.appspot.com",
  messagingSenderId: "971939744035",
  appId: "1:971939744035:web:3e018fa0f3c2124b00a496"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }
        catch(error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};
