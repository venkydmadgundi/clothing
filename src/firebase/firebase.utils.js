import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDJgGW0hI_IalWlwe02clR63sj_BpWCGzE",
    authDomain: "crowndb-11820.firebaseapp.com",
    databaseURL: "https://crowndb-11820.firebaseio.com",
    projectId: "crowndb-11820",
    storageBucket: "crowndb-11820.appspot.com",
    messagingSenderId: "59725476623",
    appId: "1:59725476623:web:3ca3c8989da0b2eb50447a",
    measurementId: "G-NNWE1L9ELF"
  };

  export const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if(!userAuth) return;
     const userRef = firestore.doc(`users/${userAuth.uid}`);
     const snapShot = await userRef.get();

     if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log("Error Creating USer", error.message);
        }
     }
     return userRef;
  }
 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();



 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt: 'select_account'});
 export const signInWithGoogle = () => auth.signInWithPopup(provider);
 export default firebase;




