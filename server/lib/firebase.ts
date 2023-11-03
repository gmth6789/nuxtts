import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//your firebase configuration goes here
//https://firebase.google.com/docs/web/learn-more?authuser=0&hl=en#modular-version

var firebaseConfig = {
    apiKey: "AIzaSyBKetm8YvGUFOC3pxKfEcgNLfDI_CG2XBo",
    authDomain: "myliff-appth.firebaseapp.com",
    projectId: "myliff-appth",
    storageBucket: "myliff-appth.appspot.com",
    messagingSenderId: "221681194343",
    appId: "1:221681194343:web:c4f24733f52e3e664b4bc2",
    measurementId: "G-01JMJTMW9V"
  };

export const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);



