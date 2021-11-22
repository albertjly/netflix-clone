import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCwLB6kUqYXVZOJyhje9W7blMVP4z_Q5_k",
  authDomain: "netflix-clone-c18e9.firebaseapp.com",
  projectId: "netflix-clone-c18e9",
  storageBucket: "netflix-clone-c18e9.appspot.com",
  messagingSenderId: "69404188227",
  appId: "1:69404188227:web:cbe39ffb0fa9ba9c217ef6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;