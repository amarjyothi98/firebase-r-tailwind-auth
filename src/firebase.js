// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz8aCNmDAZD0AQn7sntoeKSDd99l5UBZ4",
  authDomain: "auth-protected-routes.firebaseapp.com",
  projectId: "auth-protected-routes",
  storageBucket: "auth-protected-routes.appspot.com",
  messagingSenderId: "520914336192",
  appId: "1:520914336192:web:ef3c86776b103d51bcf025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export default app; 