import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6_VQyULdwKdovtGzq0Lw2w0X87haY8pc",
  authDomain: "image-gallery-a5c13.firebaseapp.com",
  projectId: "image-gallery-a5c13",
  storageBucket: "image-gallery-a5c13.appspot.com",
  messagingSenderId: "681738796158",
  appId: "1:681738796158:web:7da085a3c7098bb632ac2f",
  measurementId: "G-5MVQ0GVF0Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//for Authentication
export const auth = getAuth(app);
 