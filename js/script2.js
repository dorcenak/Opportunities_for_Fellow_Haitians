// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxtiDEiBQqq__9tQaI_ynpiNnA-29ozOM",
    authDomain: "ofha-2.firebaseapp.com",
    projectId: "ofha-2",
    storageBucket: "ofha-2.appspot.com",
    messagingSenderId: "1094866755220",
    appId: "1:1094866755220:web:c2d4a4902775b1b4e95e81",
    measurementId: "G-G17P17D59N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the Firestore instance
export const db = getFirestore(app);
