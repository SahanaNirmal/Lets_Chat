
const firebaseConfig = {
      apiKey: "AIzaSyB46svdMVTx6iQrzTmsUqAJkLNbBmFV8Go",
      authDomain: "medichat-45490.firebaseapp.com",
      projectId: "medichat-45490",
      storageBucket: "medichat-45490.appspot.com",
      messagingSenderId: "760922263205",
      appId: "1:760922263205:web:38a2531a7f675c0d45474c",
      measurementId: "G-Q44PMD1Q0V"
    };
    
    // Initialize Firebase
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
