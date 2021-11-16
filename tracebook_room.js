
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD7Nvlk5zaRconEJx0Y9Ez_nivjEhPo_bU",
      authDomain: "anything-46628.firebaseapp.com",
      projectId: "anything-46628",
      storageBucket: "anything-46628.appspot.com",
      messagingSenderId: "365861322105",
      appId: "1:365861322105:web:21d68a6998ba04c6a543a8",
      measurementId: "G-MJ4WJGE0K4"
    };
    user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
