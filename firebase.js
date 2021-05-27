import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD0lKx6LDkfYbQQZIt8kIwoIVyPhTq2yac",
    authDomain: "linkedin-clone-d5b96.firebaseapp.com",
    projectId: "linkedin-clone-d5b96",
    storageBucket: "linkedin-clone-d5b96.appspot.com",
    messagingSenderId: "250498044084",
    appId: "1:250498044084:web:67730958917fd8d1d6c7e1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;