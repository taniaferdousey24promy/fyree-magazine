// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvDuq6gTjFR0-Ko602z_eAV7okTyEwgSY",
  authDomain: "fyree-magazine.firebaseapp.com",
  projectId: "fyree-magazine",
  storageBucket: "fyree-magazine.appspot.com",
  messagingSenderId: "17256631308",
  appId: "1:17256631308:web:5f1cf80ff4a4010a983229"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;