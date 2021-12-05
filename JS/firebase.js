// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyBygoXSSfGeELdKTwxuqVwX2MLgcxIs6Mg",
  authDomain: "parq-fast1.firebaseapp.com",
  projectId: "parq-fast1",
  storageBucket: "parq-fast1.appspot.com",
  messagingSenderId: "492022183728",
  appId: "1:492022183728:web:8ab165c29068c81db0faf5"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export const FirebaseStorage=firebase.storage();
export default firebase.firestore();