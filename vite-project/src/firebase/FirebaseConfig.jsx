// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth} from 'firebase/auth';
import { getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1pLGoQhE84uVYd4N1QnOc2Y_eDN-5jLs",
  authDomain: "myblog-eb5ce.firebaseapp.com",
  projectId: "myblog-eb5ce",
  storageBucket: "myblog-eb5ce.appspot.com",
  messagingSenderId: "109997922641",
  appId: "1:109997922641:web:6c1b843f60fac9acb6db70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDb, auth, storage}