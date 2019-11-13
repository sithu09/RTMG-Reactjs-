import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as firebase from 'firebase';
import App from './App';
import * as serviceWorker from './serviceWorker';

var firebaseConfig = {
    apiKey: "AIzaSyAUvmTbp29_K7p_O5YWnZsJnjha8WeFGcE",
    authDomain: "everythingisfucked.firebaseapp.com",
    databaseURL: "https://liberity-a214c.firebaseio.com/",
    projectId: "everythingisfucked",
    storageBucket: "everythingisfucked.appspot.com",
    messagingSenderId: "353444237399",
    appId: "1:353444237399:web:f7c2c6c3cd796a5edad312",
    measurementId: "G-WSD0JJPSDH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
