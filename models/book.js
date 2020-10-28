// References the standard library
//var Sequelize = require("sequelize");
//Connection to the the DB
//var sequelize = require("../config/connection.js");

//Book matches the DB
module.exports = function(sequelize, DataTypes){
var Book = sequelize.define("book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    small_image_url: DataTypes.STRING
  });

return Book
  //Book.sync();
}   
// Book model is available for other files
  // module.exports = Book;