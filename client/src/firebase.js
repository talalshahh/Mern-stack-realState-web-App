// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "real-state-2d963.firebaseapp.com",
	projectId: "real-state-2d963",
	storageBucket: "real-state-2d963.appspot.com",
	messagingSenderId: "440790208628",
	appId: "1:440790208628:web:09ac80725f52136c310121",
	measurementId: "G-JFGB2HRMDE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
