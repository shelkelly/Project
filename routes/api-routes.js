
module.exports = function(app) {
  
  

  // Route for getting some data about our user to be used client side
  app.get("/api/all", function(req, res) {
    Book.findAll({}).then(function(results) {
        res.json(results);
    });
  });
};
