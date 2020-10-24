// IMPORT THE ORM!
const { DataTypes } = require("sequelize/types");
var orm = require("../config/orm.js");

// Creating our Search model

  var search = sequelize.define("Search", {
    all: function(cb) {
        orm.all("topten", function(res) {
            cb(res);
        });
    },
    // Search by author
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Search by book title
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    // Search by genre
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });

  module.exports = search;
