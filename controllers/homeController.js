(function(homeController){
  "use strict"
  var data = require("../data");

  homeController.init = function (app){

    app.get("/", function(request, response){

      data.getNoteCategories(function (error, results){
        response.render("jade/index", {title : "Jade + Express", error: "errors show here", results: results});
      });

    });
  };
})(module.exports);
