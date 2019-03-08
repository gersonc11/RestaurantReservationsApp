// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Set variable for reservation and wait list arrays
var reservation = [];
var waitList = [];  

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Restaurant DATA 
// =============================================================



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
  });
  
 

// Displays all Reservations
app.get("/api/reservations", function(req, res) {
    return res.json(reservation);
  });
  
  // Display waitlist
  app.get("/api/waitlist", function(req, res) {
   
    return res.json(waitList);
  });




  



//  function reserve() {
  app.post("/api/reservations", function(req, res) {
    var newGuest = req.body;
    
    newGuest.routeName = newGuest.name.replace(/\s+/g, "").toLowerCase();
    console.log(reservation.length);
    
    if(reservation.length < 5) {
      reservation.push(newGuest);
      res.json(newGuest);
    }
    else {
      waitList.push(newGuest);
      res.json(newGuest);
    }
  });
// }
  


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });