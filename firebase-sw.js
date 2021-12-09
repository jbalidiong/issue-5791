// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-auth-compat.js');

//V8 for comparison
//importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  ....
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.getToken({ vapidKey: 'VAPID_KEY' })
.then(result =>{
    console.log(result);
});

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});


 auth.onAuthStateChanged((user) => {
     if (user) {
       // User is signed in, see docs for a list of available properties
       // https://firebase.google.com/docs/reference/js/firebase.User
       console.log('Webworker: ',user.uid)
     } else {
       // User is signed out
       console.log("Webworker: User is signed out");
     }
   })
