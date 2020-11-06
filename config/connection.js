// Set up MySQL connection.
const mysql = require("mysql");
require('dotenv').config();

let connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
    host: "tj5iv8piornf713y.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "qwftfn7t8qdqbbhi",
    password: process.env.PASSWORD,
    database: "kqx619cnz4yu5g4m"

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