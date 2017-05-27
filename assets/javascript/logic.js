// Initialize Firebase
var config = {
   apiKey: "AIzaSyCQGktAXFMjQfC3rcPBNiAJj1a_BDHqH4c",
   authDomain: "traintime-1a8ec.firebaseapp.com",
   databaseURL: "https://traintime-1a8ec.firebaseio.com",
   projectId: "traintime-1a8ec",
   storageBucket: "traintime-1a8ec.appspot.com",
   messagingSenderId: "108169152285"
  };

 firebase.initializeApp(config);

 var database = firebase.database();

 // Add Train Values
 var trainName = "";
 var destination = "";
 var time = 0;
 var frequency =0;


    // Capture Add Train Values on Submit Button Click
    $("#submit").on("click", function(event) {
      event.preventDefault();

        trainName = $("#train-input").val().trim();
        destination = $("#destination-input").val().trim();
        time = parseInt($("#time-input").val().trim());
        frequency = parseInt($("#minutes-input").val().trim());


    // Code for the data push to Firebase
      dataRef.ref().push({

        trainName: trainName,
        destination: destination,
        time: time,
        frequency: frequency,
      });
    });

    // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    //dataRef.ref().on("child_added", function(childSnapshot) {

     /* // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().email);
      console.log(childSnapshot.val().age);
      console.log(childSnapshot.val().comment);
      console.log(childSnapshot.val().joinDate);

      // full list of items to the well
      $("#full-member-list").append("<div class='well'><span id='name'> " + childSnapshot.val().name +
        " </span><span id='email'> " + childSnapshot.val().email +
        " </span><span id='age'> " + childSnapshot.val().age +
        " </span><span id='comment'> " + childSnapshot.val().comment + " </span></div>");*/

   

