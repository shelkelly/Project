// References the standard library
var Sequelize = require("sequelize");
//Connection to the the DB
var sequelize = require("../config/connection.js");

//Book matches the DB
var Book = sequelize.define("book", {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
  });


  Book.sync();
  
// Book model is available for other files
  module.exports = Book;