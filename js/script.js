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

// Now you can use Firebase services in your code
// For example, to use Firestore:

const db = getFirestore(app);

// You can now use the 'db' object to interact with Firestore
// For example, you can add a document to a collection:

const exampleCollection = collection(db, 'exampleCollection');

addDoc(exampleCollection, {
    fieldName: 'fieldValue'
})
    .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
    })
    .catch(error => {
        console.error('Error adding document: ', error);
    });

function subscribe() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;

    // Use the 'db' object from firebase.js to add data to Firestore
    const subscribersCollection = collection(db, 'subscribers');

    addDoc(subscribersCollection, {
        firstName: firstName,
        lastName: lastName,
        email: email
    })
        .then(docRef => {
            console.log('Subscriber added with ID: ', docRef.id);
            // Display thank-you message
            showThankYouMessage();
        })
        .catch(error => {
            console.error('Error adding subscriber: ', error);
        });
}

function showThankYouMessage() {
    // Hide the subscribe form
    const subscribeForm = document.getElementById('subscribe-form');
    subscribeForm.style.display = 'none';

    // Display the thank-you message
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.style.display = 'block';
}

// Add this line to make the functions accessible from the HTML file
window.subscribe = subscribe;
window.showThankYouMessage = showThankYouMessage;
