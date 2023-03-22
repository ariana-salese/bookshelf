import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOw2vK-7QFFOIOgJtX_LNYL7LZT_Ljffk",
  authDomain: "bookshelf-react-web.firebaseapp.com",
  projectId: "bookshelf-react-web",
  storageBucket: "bookshelf-react-web.appspot.com",
  messagingSenderId: "1091460260004",
  appId: "1:1091460260004:web:45445bf70983e0efd90631"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
