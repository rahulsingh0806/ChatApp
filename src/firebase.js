// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDX21hwVSwflAJ6jRVNXlNiDzVBX7YYkGI",
  authDomain: "afs-project-e2ffc.firebaseapp.com",
  projectId: "afs-project-e2ffc",
  storageBucket: "afs-project-e2ffc.appspot.com",
  messagingSenderId: "321086168326",
  appId: "1:321086168326:web:1392856a3541f241db5287",
  measurementId: "G-938SNCSMWK"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };