// Requiring necessary npm packages
const express = require("express");






// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;


const db = require("./models/");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

<<<<<<< HEAD
// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
=======

>>>>>>> 8f512bee6ffe51f86bb9b1518a0b0f95d18b73bb

// Requiring our routes
require("./routes/api-routes.js")(app);


// Syncing our database and logging a message to the user upon success
db.sequelize.sync({force:false}).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
