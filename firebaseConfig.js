import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCb9c1MGwrFuCMijfySgx51E9jaLTc_NV0",
  authDomain: "cellbio-b1189.firebaseapp.com",
  projectId: "cellbio-b1189",
  storageBucket: "cellbio-b1189.appspot.com",
  messagingSenderId: "207389675700",
  appId: "1:207389675700:web:13b90fd4a9e596e17247e1",
  measurementId: "G-B24D0G4K2V"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
