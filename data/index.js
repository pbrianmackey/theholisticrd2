(function (data){

  var seedData = require("./seedData");
  var database = require("./database");

  data.getNoteCategories = function (next){
    next(null, seedData.initialNotes);
  };


  function seedDatabase() {
    database.getDb(function(err, db){
      if(err){
        console.log("failed to seed db: " + err);
      }else{
        //test to see if data exists yet
        db.notes.count(function(err, count){
          if(err){
            console.log("failed to retrieve db count");
          }else{
            if(count == 0){
              console.log("Seeding the database...")
              seedData.initialNotes.forEach(function(item){
                db.notes.insert(item, function(err){
                  if(err) console.log("failed to insert note into database");
                })
              });
            }else{
              console.log("Database already seeded...");
            }
          }
        });
      }
    });
  }

  seedDatabase();

})(module.exports);
