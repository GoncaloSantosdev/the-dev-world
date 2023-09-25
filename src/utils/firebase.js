// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: "nextjs-blog-ff64e.appspot.com",
  messagingSenderId: "330264727809",
  appId: "1:330264727809:web:5d1ef9b2b4424cfec20b00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
