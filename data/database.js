(function(database){

  var mongodb = require("mongodb");
  var mongoUrl = "mongodb://localhost:27017/theBoard";//the last part is a namespace
  var theDb = null;//deferred instantiation

  database.getDb = function(next){
      //mongodb supports connection pooling.  Keep connections open.
      if(!theDb) {
        //connect to the db
        mongodb.MongoClient.connect(mongoUrl, function(err, db) {
          if(err){
            next(err, null);
          }else{
            //db object allows us to later extend the object with new data
            theDb = {
              db: db,
              notes: db.collection("notes")
            };
            next(null, theDb);
          }
        })
      }else{
        next(null, theDb);
      }
  }

})(module.exports);
