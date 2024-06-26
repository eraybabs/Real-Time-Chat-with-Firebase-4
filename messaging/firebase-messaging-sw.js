﻿// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB2ioaj7KKe_XYMLBrWpy8ivKyoLDVm-uw",
    authDomain: "realtimechat4-46018.firebaseapp.com",
    databaseURL: "https://realtimechat4-46018-default-rtdb.firebaseio.com/",
    projectId: "realtimechat4-46018",
    storageBucket: "realtimechat4-46018.appspot.com",
    messagingSenderId: "525717285893",
    appId: "1:525717285893:web:a642fcf6fe528de956406c"
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



