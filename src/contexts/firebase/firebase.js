import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCucdz1mY8kpUQUGKuvB_sBimOViP3sRzU",
    authDomain: "movie-booking-app-react.firebaseapp.com",
    projectId: "movie-booking-app-react",
    storageBucket: "movie-booking-app-react.appspot.com",
    messagingSenderId: "164577142562",
    appId: "1:164577142562:web:7b311f7b3e3046f74fe77b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
