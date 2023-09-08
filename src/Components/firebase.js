// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Ryan's web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnZcuMj6D0YPftnf0ABrMPBguylLi89k0",
  authDomain: "react-auth-tutorial-5b201.firebaseapp.com",
  projectId: "react-auth-tutorial-5b201",
  storageBucket: "react-auth-tutorial-5b201.appspot.com",
  messagingSenderId: "87062144001",
  appId: "1:87062144001:web:a30cb3f219897e310e0c00"
};

// paste your web app's Firebase config here


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };