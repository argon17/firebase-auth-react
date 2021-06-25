// import firebase
import firebase from "firebase";

// Firebase Config
const firebaseConfig = {
    apiKey: "API_KEY",
    projectId: "PROJECT_ID",
    databaseURL: "DATABASE_URL",
    authDomain: "AUTH_DOMAIN",
    // OPTIONAL
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID"
};


// initialize the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// firestore instance
const db = firebaseApp.firestore();
// Authentication Handler
const auth = firebase.auth();
// Storage instance
const storage = firebase.storage();
//Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };