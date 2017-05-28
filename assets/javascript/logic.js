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

 var dataRef = firebase.database();

 // Add Train Values
 var trainName = "";
 var destination = "";
 var time = 0;
 var frequency = 0;


//function clearForm () {
 		//trainName = $("#train-input").empty();
        //$("#destination-input").val().empty();
        //$("#time-input").val().empty();
        //$("#minutes-input").val().empty();
	//};


    // Capture Add Train Values on Submit Button Click
    $("#add-train").on("click", function(event) {
      event.preventDefault();

        trainName = $("#train-input").val().trim();
        destination = $("#destination-input").val().trim();
        time = ($("#time-input").val().trim());
        frequency = parseInt($("#minutes-input").val().trim());


    // Code for the data push to Firebase
      dataRef.ref().push({

        trainName: trainName,
        destination: destination,
        time: time,
        frequency: frequency,
      });
      //clearForm();
    });

    // Firebase return of Trains
    dataRef.ref().on("child_added", function(snapshot) {

    //Log everything that's coming out of snapshot
    console.log(snapshot.val().trainName);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().time);
    console.log(snapshot.val().frequency);

    var timeNow = moment().format("hh:mm a");
    var timeDB = snapshot.val().time;
    var minutesAway = timeNow - timeDB;
    var timeX = moment(timeDB).format("X");
    console.log(timeX);


    var rowDiv = $("<tr>")
   	var tdName = $("<td>").text(snapshot.val().trainName);
   	var tdDest = $("<td>").text(snapshot.val().destination);
   	var tdTime = $("<td>").text(moment().format("hh:mm a"));
   	var tdFreq = $("<td>").text(snapshot.val().frequency);

   		rowDiv.append(tdName,tdDest,tdFreq,tdTime);

    $("#holder").prepend(rowDiv);


  });
      

 

