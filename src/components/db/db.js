// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtOzPkM51-RTYagMAMWDmFeqio926tLeY",
  authDomain: "ecommerce-coder-house-846d2.firebaseapp.com",
  projectId: "ecommerce-coder-house-846d2",
  storageBucket: "ecommerce-coder-house-846d2.appspot.com",
  messagingSenderId: "818023550525",
  appId: "1:818023550525:web:eb6b2f49bd9936d32ee454"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db