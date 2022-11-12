// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_5Oc0TYSXvYUYkgUE6kABBIUqnz-sfb0",
  authDomain: "flock-of-friends-ce9b4.firebaseapp.com",
  projectId: "flock-of-friends-ce9b4",
  storageBucket: "flock-of-friends-ce9b4.appspot.com",
  messagingSenderId: "107880197129",
  appId: "1:107880197129:web:b690eed03d096f86f0dcd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app

