import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyDcUPunF9VrBr0mbmqrXYyJmXQFcB3Rp2w",
  authDomain: "svelte-todo-36712.firebaseapp.com",
  databaseURL: "https://svelte-todo-36712.firebaseio.com",
  projectId: "svelte-todo-36712",
  storageBucket: "svelte-todo-36712.appspot.com",
  messagingSenderId: "7588172765",
  appId: "1:7588172765:web:82de742e284986639b5c34",
  measurementId: "G-4K8T6871KG"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
