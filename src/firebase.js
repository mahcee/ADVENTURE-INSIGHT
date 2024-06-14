// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATn5pTKIPLfp-rw1EIKntOrE19yICow98",
  authDomain: "adventure-insights.firebaseapp.com",
  projectId: "adventure-insights",
  storageBucket: "adventure-insights.appspot.com",
  messagingSenderId: "698069960166",
  appId: "1:698069960166:web:d211cc3496d008679dc227"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)