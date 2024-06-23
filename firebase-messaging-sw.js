// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDd1a3SKQkp593zJHgRj77oAaf0eBoZeOg",
    authDomain: "realtimechat4-2f82f.firebaseapp.com",
    databaseURL: "https://realtimechat4-2f82f-default-rtdb.firebaseio.com/",
    projectId: "realtimechat4-2f82f",
    storageBucket: "realtimechat4-2f82f.appspot.com",
    messagingSenderId: "701837308785",
    appId: "1:701837308785:web:fce88cce8726ef54ab3cd0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



