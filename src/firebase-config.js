import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdUpmy35he1PLb5tCh9G16sTHtJ04nqac",
  authDomain: "showcase-d9c7c.firebaseapp.com",
  projectId: "showcase-d9c7c",
  storageBucket: "showcase-d9c7c.appspot.com",
  messagingSenderId: "790058652578",
  appId: "1:790058652578:web:fe1ac18b07e29383e0d8fb",
  measurementId: "G-3B5DHJS7XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);