// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//firebase config that returns firebase app instance of our connected firebase backend
const firebaseConfig = {
  apiKey: "AIzaSyAz2atMQHm87mfUpSf9rcIVgoi5uMRXvA0",
  authDomain: "kubeest8.firebaseapp.com",
  projectId: "kubeest8",
  storageBucket: "kubeest8.appspot.com",
  messagingSenderId: "324917939409",
  appId: "1:324917939409:web:254b4b9366c062b80dc9f0",
  measurementId: "G-1FEJ0Z7V14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);