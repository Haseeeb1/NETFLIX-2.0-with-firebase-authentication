import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "Your api key",
  authDomain: "your authdomain",
  databaseURL:
    "your db url",
  projectId: "your projectid",
  storageBucket: "....",
  messagingSenderId: "....",
  appId: ".....",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
