import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-Q0CNf3FAUvRJydUiJ5yJivnzW9QsWdw",
  authDomain: "atvd2-pdm.firebaseapp.com",
  projectId: "atvd2-pdm",
  storageBucket: "atvd2-pdm.appspot.com",
  messagingSenderId: "856526335102",
  appId: "1:856526335102:web:06fd9e37afec1a9589bc2f",
  measurementId: "G-2H4C615QLR",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
