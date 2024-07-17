// Import the functions you need from the SDKs you need
import React from "react";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoRowBU1FC9SiZ5KIECiQ4amNfsSj-Yb4",
  authDomain: "patanyumba-ec0c3.firebaseapp.com",
  databaseURL: "https://patanyumba-ec0c3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "patanyumba-ec0c3",
  storageBucket: "patanyumba-ec0c3.appspot.com",
  messagingSenderId: "295463374734",
  appId: "1:295463374734:web:138f3f2711ee5ce6c85edf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app