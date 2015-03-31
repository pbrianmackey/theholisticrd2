"use strict"

var http = require("http");
var express = require("express");
var app = express();
var controllers = require("./controllers");

app.set("view engine", "jade");

//set the public static resources folder
app.use(express.static(__dirname + "/public"));

//Map the routes
controllers.init(app);

//bower is a facility for dling client side code

app.get("/api/users", function(request, response){
  response.set("Content-type", "application/json");
  response.send({name: "Brian", isValid: true});
});

app.get("/api/sql", function(request, response){
  var msnodesql = require("node-sqlserver-unofficial");
  var connString = "Driver={SQL Server Native Client 11.0};Server=(local);Database=master;Trusted_Connection={Yes}"

  //Update this to run a real query.
  var query = "SELECT TOP 10 * FROM Customers";
  msnodesql.query(connString, query, function(err, results){
      if(err){
        console.log(err);
      }
      else{
        console.log(results);
        response.send(results);
      }
  });
});

var server = http.createServer(app);

server.listen(3333);
