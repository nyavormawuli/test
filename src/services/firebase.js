// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ1jNRSLXFRdfjyGbUQjZaTIzjDsZOwdk",
  authDomain: "campuscalm-79b70.firebaseapp.com",
  databaseURL: "https://campuscalm-79b70-default-rtdb.firebaseio.com",
  projectId: "campuscalm-79b70",
  storageBucket: "campuscalm-79b70.appspot.com",
  messagingSenderId: "657792222302",
  appId: "1:657792222302:web:8ca49450e2f756a24160cf",
  measurementId: "G-WYVT9VFLLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const UserRef = collection(db, "users")
export { auth, db, storage, UserRef };