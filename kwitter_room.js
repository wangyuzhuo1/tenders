var firebaseConfig = {
    apiKey: "AIzaSyDHs7DX1dJkNWdxnFRXnYjdiyIjWWdqZy0",
    authDomain: "letschat-4b0bf.firebaseapp.com",
    databaseURL: "https://letschat-4b0bf-default-rtdb.firebaseio.com",
    projectId: "letschat-4b0bf",
    storageBucket: "letschat-4b0bf.appspot.com",
    messagingSenderId: "589647215821",
    appId: "1:589647215821:web:4c449f8b8da458d7783d84"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
 
  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "we are trying to add a room name."
    })
    localStorage.setItem("room_name", room_name)
    window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   chickentenders="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>"+Room_names+"</div><hr>"
   document.getElementById("output").innerHTML+=chickentenders
   });});}
getData();
function redirecttoroomname(name){
    localStorage.setItem("room_name", name)
    window.location="kwitter_page.html"
    }
    
    function logout(){
          localStorage.removeItem("user_name")
          localStorage.removeItem("room_name")
          window.location="index.html"
    }