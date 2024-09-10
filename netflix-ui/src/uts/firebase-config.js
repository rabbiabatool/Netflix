// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDVr1LTaNgCPo7bplZRuqTo-0AsEE5XLG8",
    authDomain: "netflix-ui-39f3d.firebaseapp.com",
    projectId: "netflix-ui-39f3d",
    storageBucket: "netflix-ui-39f3d.appspot.com",
    messagingSenderId: "724384583203",
    appId: "1:724384583203:web:653a503866d8e880f42b96",
    measurementId: "G-JZ50HW8Z14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth= getAuth(app);