importScripts('https://www.gstatic.com/firebasejs/3.6.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.4/firebase-messaging.js');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyArEaIk3iFNYQbB9u0eW_UVPB5GMaz1aV4",
    authDomain: "amp-pwa-vue.firebaseapp.com",
    databaseURL: "https://amp-pwa-vue.firebaseio.com",
    storageBucket: "amp-pwa-vue.appspot.com",
    messagingSenderId: "583154623608"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
