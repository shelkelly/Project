// IMPORT THE ORM!
const { DataTypes } = require("sequelize/types");
var orm = require("../config/orm.js");

// Creating our Search model

  var search = sequelize.define("Search", {
    index: function(cb) {
        orm.all("topten", function(res) {
            cb(res);
        });
    },
    // Search by author
    search: function(table, objColVals, condition, cb) {
      orm.author("author", table, objColVals, condition, function(res) {
        cb(res);
      })
    }
  });

  module.exports = search;
