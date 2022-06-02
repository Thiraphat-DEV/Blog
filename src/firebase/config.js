import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC18y5sKkLW4IiBYeSpMyWkTocMno3kFZ0",
  authDomain: "thedojo-6c8c2.firebaseapp.com",
  projectId: "thedojo-6c8c2",
  storageBucket: "thedojo-6c8c2.appspot.com",
  messagingSenderId: "1008821368149",
  appId: "1:1008821368149:web:da33167eb1ec4612962bdc",
  measurementId: "G-FHDJC7EZ8C"
};
//init firebase
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
//timestamp
const timestamp = firebase.firestore.Timestamp

export {projectAuth, projectFirestore, timestamp, projectStorage}
