// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';  // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6jRfcofoktT7vn_tkDl5tzyiP5ubk5Ko",
  authDomain: "dashboardsga-32fa5.firebaseapp.com",
  projectId: "dashboardsga-32fa5",
  storageBucket: "dashboardsga-32fa5.appspot.com",
  messagingSenderId: "266477314491",
  appId: "1:266477314491:web:515f4fb8cbd183a38ee49e"
};

const app = initializeApp(firebaseConfig);


// Initialize Firebase
const auth = getAuth(app);
const db = getFirestore(app);  // Initialize Firestore

export { auth, db };