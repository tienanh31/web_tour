// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChetyRLKbTFgdsro5Xd0Sc9LZPwyi4Aig",
  authDomain: "web1-887ce.firebaseapp.com",
  projectId: "web1-887ce",
  storageBucket: "web1-887ce.appspot.com",
  messagingSenderId: "1005092442680",
  appId: "1:1005092442680:web:c8d12174cd112199f44ccd",
  measurementId: "G-RVZYY7SPKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);