import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 
const firebaseConfig = {
    apiKey: "AIzaSyAjQzU2602Jv4_1ugH2CshYzFC71BJtKiQ",
    authDomain: "linkedin-clone-7e4a3.firebaseapp.com",
    projectId: "linkedin-clone-7e4a3",
    storageBucket: "linkedin-clone-7e4a3.appspot.com",
    messagingSenderId: "169843858658",
    appId: "1:169843858658:web:f26e2170e81668003c52bb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };