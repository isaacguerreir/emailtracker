const functions = require('firebase-functions');
const path = require('path');
const firebase = require("firebase");
const config = require('./config/config');

firebase.initializeApp(config);

exports.helloWorld = functions.https.onRequest((request, response) => {
  let counter;
  let obj = request.params[0];
  ref = firebase.database().ref("users" + obj + "/tracker/hash123456789")
  response.sendFile(path.resolve(__dirname, 'img/onepixel.png'));
  ref.once('value', function(snapshot) {
    counter = snapshot.val();
    ref.set( counter += 1 );
  }); 
});
