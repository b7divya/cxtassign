// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-ZGY6zhSgD2I-Uj_FRNuEcm-r73ycgRk",
  authDomain: "cxtapp-178f4.firebaseapp.com",
  projectId: "cxtapp-178f4",
  storageBucket: "cxtapp-178f4.firebasestorage.app",
  messagingSenderId: "701983656855",
  appId: "1:701983656855:web:7b530e7a68fc0d291992d2",
  measurementId: "G-HMEVY4FTMP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);