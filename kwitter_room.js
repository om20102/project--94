// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD4xh0wR1t214mYpWKPwpHM5bUJKdFpHH0",
    authDomain: "kwitter-project-abed1.firebaseapp.com",
    projectId: "kwitter-project-abed1",
    storageBucket: "kwitter-project-abed1.appspot.com",
    messagingSenderId: "439656599905",
    appId: "1:439656599905:web:5cb0ff4fd97cfa109f3520"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  un = localStorage.getItem("name");
  document.getElementById("h3").innerHTML = "Welcome " + un +"!";