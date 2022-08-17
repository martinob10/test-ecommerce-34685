// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6b1oPnufiATwDGliioMh8wrTJVGzVup8",
  authDomain: "ecommerce-34685.firebaseapp.com",
  projectId: "ecommerce-34685",
  storageBucket: "ecommerce-34685.appspot.com",
  messagingSenderId: "743506553857",
  appId: "1:743506553857:web:415bb7837735a3a3312400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db