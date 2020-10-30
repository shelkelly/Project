// Set up MySQL connection.
const mysql = require("mysql");
require('dotenv').config();

<<<<<<< HEAD
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "E122w920!",
  database: "books",
  dialect: "mysql"
});
=======
>>>>>>> 84ff93879d9ce44cd1bc00fca2bcd1ce45bd3f07

let connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD,
    database: "books"

});
}
// Make connection.
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;