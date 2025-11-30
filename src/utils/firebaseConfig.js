// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC8EAjHEdPLT1W3DAz_axDQENJHoNs7ItE",
	authDomain: "netflics-1de7d.firebaseapp.com",
	projectId: "netflics-1de7d",
	storageBucket: "netflics-1de7d.firebasestorage.app",
	messagingSenderId: "603641492344",
	appId: "1:603641492344:web:50fd0d8afd0e4daa6e0e8d",
	measurementId: "G-X6YWZC68V7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
